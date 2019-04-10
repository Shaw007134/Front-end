import React, { Component } from 'react'

import Input from './input'
import List from './list'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  addToList(val) {
    let list = this.state.list
    this.setState({
      list: list.concat(val)
    })
    console.log(this.state.list)
  }

  render() {
    return (
      <div id="Todo">
        <Input addTitle={this.addToList.bind(this)} />
        <List data={this.state.list} />
      </div>
    )
  }
}

export default Todo
