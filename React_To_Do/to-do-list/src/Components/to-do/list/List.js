import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const list = this.props.data
    console.log(list)
    const ll = {
      color: 'blue'
    }
    return (
      <ul style={ll} onClick={e => this.props.handleClick(e)}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
}

export default List
