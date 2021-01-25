import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
     return (
       <div className="App">
         <h1>Hi,I am a react App</h1>
         <p>This is really working!</p>
         <Person name="Shashika" age="28"/>
         <Person name="Nalin" age="27">I am good Programmer</Person>
         <Person name="Kapuge" age="29"/>
         
       </div>
     );
    // return ( React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello')));
  } 
}

export default App;
