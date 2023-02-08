import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div> <h1>welcome to user</h1>
      <button onClick={this.props.clickData}>logOut</button></div>
    )
  }
}
