import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
     /*return (
       <div className="App">
         <h1>Hi,I am a react App</h1>
       </div>
     );*/
     return ( React.createElement('div',null,React.createElement('h1',null,'Hello')));
  } 
}

export default App;
