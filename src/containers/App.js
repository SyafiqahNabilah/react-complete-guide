import React, { Component } from "react";

import classes from "./App.css";
import Person from "../components/Persons/Person/Person";

class App extends Component {
  state = {
    //set and pass from outside
    persons: [
      { id: "p3", name: "Max", age: 28 },
      { id: "p4", name: "Amirah", age: 10 },
      { id: "p5", name: "Staph", age: 25 },
    ],
    something: "this one never change",
    showPerson: false,
  };

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked');
  //   this.setState( //set new state value
  //     {
  //       //set and pass from outside
  //       persons:[
  //         {name: newName, age: 28},
  //         {name: 'Amani', age: 10},
  //         {name: 'StapStevenh', age: 25},

  //       ]
  //     }
  //   )
  // }

  // binding example
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex], //js shouldnt point mutably
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
    // this.setState( //set new state value
    //   {
    //     //set and pass from outside
    //     persons:[
    //       {name: 'Maxim', age: 28},
    //       {name: event.target.value, age: 10}, //target to change value based on user entered
    //       {name: 'StapStevenh', age: 25},

    //     ]
    //   }
    // )
  };
  deletePersonHandler = (personIndex) => {
    //fetch all person
    // const personsHere = this.state.persons <-- example of inproper calling array
    // const personsHere = this.state.persons.slice(); //copy og array into here
    const personsHere = [...this.state.persons]; //equivalent to above approach -update state immutably
    //remove one person, change in here only if reload still have same number
    personsHere.splice(personIndex, 1);
    //set back state with updated list
    this.setState({ persons: personsHere });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  render() {

    let person = null;
    let btnClass = ''

    if (this.state.showPerson) {
      person = (
        <div>
          <p>Rendered Array</p>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                // key = {index}
                key={person.id} //if array have id
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}

          {/* <p>Rendered component</p>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler}></Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max')}
            changed={this.nameChangeHandler}></Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.switchNameHandler}>This is a child props</Person> */}
        </div>
      );
      btnClass = classes.Red
    }
    // let classes= ['red','bold'].join(' ')
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1 className="App-title">Hi, I'm a React App</h1>
          <p className={assignedClasses.join(" ")}>This is really working!</p>
          <button className={btnClass} onClick={this.togglePersonHandler}>
            Toogle
          </button>
          {person}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')) //render
  }
}

export default App;
