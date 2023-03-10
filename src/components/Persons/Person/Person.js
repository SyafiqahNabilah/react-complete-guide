import React from "react"
import classes from './Person.css'

const Person = (props) => {
    return (
    <div className={classes.Person}>
        <p onClick={props.click}>I'm {props.name} and {props.age} </p>
        <p>{props.children}</p>

        <input type='text' onChange={props.changed} value={props.name} /> 
    </div>
     ) 
}

export default Person;