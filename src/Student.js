import React, { Component } from 'react'

export default class Student extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"ali",
      class:12
    }
    this.onClickHandler=this.onClickHandler.bind(this);
  }
 onClickHandler(){
 this.setState({name:"Muhammad saleem "})
 }
  render() {
    return (
      <div>Student {this.state.name} 
      <button onClick={this.onClickHandler}></button></div>
    )
  }
}
