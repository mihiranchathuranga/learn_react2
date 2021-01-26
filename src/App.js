import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

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

  }
  render() {
     return (
       <div className="App">
         <h1>Hi,I am a react App</h1>
         <p>This is really working!</p>
         <button onClick={this.switchNameHandler}>Switch Name</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I am a good Programmer</Person>
         <Person name={this.state.persons[2].name} age={this.state.persons[2].name}/>
         
       </div>
     );
    // return ( React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello')));
  } 
}

export default App;
