import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        { name: 'Shashika' , age: 28},
        { name: 'Nalin' , age: 27},
        { name: 'Saduni', age: 25}
      ],
      otherState: 'some other value'
    }
  );
       return (
       <div className="App">
         <h1>Hi,I am a react App</h1>
         <p>This is really working!</p>
         <button onClick={this.switchNameHandler}>Switch Name</button>
         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I am a good Programmer</Person>
         <Person name={personsState.persons[2].name} age={personsState.persons[2].name}/>
         
       </div>
     );
    // return ( React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello')));

}

export default app;




/*
state = {
    persons: [
      { name: 'Shashika' , age: 28},
      { name: 'Nalin' , age: 27},
      { name: 'Saduni', age: 25}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () =>{
    //console.log('Was clicked');
    //this.state.persons[0].name = 'Mihiran'; do not use this
    this.setState({
      persons: [
        { name: 'Upul' , age: 28},
        { name: 'Pasan' , age: 27},
        { name: 'Madhu', age: 25}
      ]
    })


*/
