import React, { Component } from 'react'
import './Home.css';
export default class Home extends Component {
    constructor(props){
        super(props)
        this.props=props
    }
  
  render() {
    const style={
      color: "green",
    }
    return (
      <div>  <label><li style ={{color:"blue"}}> welcome to pakistan</li></label>
      <label style ={style}><li>  Pakistan is the best country </li></label>
      {this.props.name} {this.props.age}  </div>
    )
  }
}
