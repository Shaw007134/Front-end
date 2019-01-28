import PropTypes from "prop-types";
import React from "react";

// 迷你redux实现
export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState = {};
  let currentListeners = [];

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    currentListeners.push(listener);
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.forEach(v => v());
    return action;
  }

  dispatch({ type: "@REDUX/SHAW-REDUX" });
  return { getState, subscribe, dispatch };
}

// 迷你react-redux实现
export class Provider extends React.Component {
  getChildContext() {
    return { store: this.store };
  }
  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args));
}

export function bindActionCreators(creators, dispatch) {
  return Object.keys(creators).reduce((ret, item) => {
    ret[item] = bindActionCreator(creators[item], dispatch);
    return ret;
  }, {});
}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((ret, item) => (...args) => ret(item(...args)));
}

export function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    };
    const middlewareChain = middlewares.map(middleware => middleware(midApi));
    dispatch = compose(...middlewareChain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

export const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

// example: action
const ADD = "ADD";
export function add() {
  return { type: ADD };
}
// example: async_dispatch
export function asyncDispatch() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add());
    }, 2000);
  };
}

// export function addTwice() {
//   return [add(),asyncDispatch()]
// }

// example, multi thunk
export const arrayThunk = ({ dispatch, getState }) => next => action => {
  if (Array.isArray(action)) {
    return action.forEach(v => dispatch(v));
  }
  return next(action);
};

export const connect = (
  mapStateToProp = state => state,
  mapDispatchToProps = {}
) => WrapComponent => {
  class ConnectComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        props: {}
      };
    }
    componentDidMount() {
      const { store } = this.context;
      store.subscribe(() => this.forceUpdate());
      this.update();
    }
    update() {
      const { store } = this.context;
      const stateProps = mapStateToProp(store.getState());
      const dispatchProps = bindActionCreators(
        mapDispatchToProps,
        store.dispatch
      );
      this.setState({
        props: {
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      });
    }
    render() {
      return <WrapComponent {...this.state.props} />;
    }
  }
  ConnectComponent.contextType = {
    store: PropTypes.object
  };
};
