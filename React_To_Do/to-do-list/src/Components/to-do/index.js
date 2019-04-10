import React, { Component } from 'react'
import Input from './Input'
import List from './List'

class Todo {
  constructor(props) {
    super(props)
    this.state = { title: '', list: ['a', 'b'] }
    this.textInput = React.createRef()
    this.getTitle = this.getTitle.bind(this)
  }
  getTitle(val) {
    this.setState({ title: val })
  }
  addToList = () => {
    this.setState({ list: this.state.list.concat(this.state.title) })
    console.log(this.state.list)
    this.textInput.current.state.title = ''
  }
  removeFromList = e => {
    console.log(e.target.innerHTML)
    let list = this.state.list.filter(item => {
      if (item === e.target.innerHTML) return false
      else return true
    })
    console.log(list)
    this.setState({ list: list })
  }
  render() {
    return (
      <div className="App">
        <Input ref={this.textInput} sendTitle={this.getTitle} />
        <button onClick={this.addToList}>{'添加'}</button>
        <List data={this.state.list} handleClick={this.removeFromList} />
      </div>
    )
  }
}
