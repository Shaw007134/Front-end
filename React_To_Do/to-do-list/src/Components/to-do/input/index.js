import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  color: red;
  font-size: 36px;
  ${(props)=>props.big && `font-size:72px`}
`
const Div2 = styled(Div)`
  color: green;
`

class Demo extends Component {
  render() {
    return (
      <div>
        <Div big>Hello I'm demo</Div>
        <Div2>Hello I'm demo</Div2>
      </div>
    )
}

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleClick = () => {
    this.props.addTitle(this.state.title)
    this.set
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div id="Input">
        <input
          type="text"
          value={this.state.title}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default Input
