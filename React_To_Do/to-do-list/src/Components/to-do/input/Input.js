import React, { Component } from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }
  setTitle(e) {
    this.setState({ title: e.target.value }, () => {
      // console.log('new state in async callback: ', this.state.title)
      this.props.sendTitle(this.state.title)
    })
    // console.log('new state in async callback: ', this.state.title)
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.title}
        onChange={e => this.setTitle(e)}
      />
    )
  }
}

export default Input
