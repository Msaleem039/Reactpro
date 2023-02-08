import React, { Component } from 'react'

export default class About extends Component {
    constructor(props){
        super(props)
        person=[
            {name: "ali ahmad" , class: 13 , city:"lahore" },
            {name: "Danial" , class: 14 , city:"lahore"},
            {name: "Rauf haris" , class: 15 , city:"lahore"},
            {name: "shaheen" , class: 16, city:"lahore"}
        ]
    }
  render() {
    let persons;
    person = this.props.persons.map((p)=>{
        <person> age:{p.name}  age:{p.age}</person>
    }
    )
    return (
        <>
       
        
        </>
      
    )
  }
}
