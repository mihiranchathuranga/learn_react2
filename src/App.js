import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
/*  we can define state in any class component 
    state is manage inside the component */ 

/*how we going to access the persons*/
//we have to use this keyword
//this keyword refers to the class
//

//this is a functional component
//useState is a hook
//use state helps to manage the state of the functional components
//assume this ; const useStateHook = useState('');
//useState will return 2 values
//first one is const useStateHook
//second one is const useStateHook() 


// const app = props => {
//   const [personsState, setPersonsState] = useState(
//     {
//       persons: [
//         { name: 'Shashika' , age: 28},
//         { name: 'Nalin' , age: 27},
//         { name: 'Saduni', age: 25}
//       ],
//       otherState: 'some other value'
//     }
//   );
//  //you can have many useStates as you want
//   const [otherState, setOtherState] = useState('some other value');
//   console.log(personsState,otherState);

//   console.log(personsState);
  /*Assume that you want show the below person context instead of the prevoius contest.
  This should be happened after we click the button*/
  /* <button onClick={switchNameHandler}> */

  // const switchNameHandler = () =>{
  //   //console.log('Was clicked');
  //   //this.state.persons[0].name = 'Mihiran'; do not use this
  //  setPersonsState({
  //     /*persons: [
  //       {},{},{}*/
  //      persons: [
  //       { name: 'Niyomal' , age: 56},
  //       { name: 'Indrachapa' , age: 66},
  //       { name: 'Mohammed', age: 76}
  //     ],
  //    // otherState: personsState.otherState
  //     //when we change the state ,useState replace with new value
  //     //if we did not add this otherState manually it does not render in the dom
  //     //but this is not a good way.what we can do is use another state
  //   });
  // };
      
//   return (
//        <div className="App">
//          <h1>Hi,I am a react App</h1>
//          <p>This is really working!</p>
//          <button onClick={switchNameHandler}>Switch Name</button>
//          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I am a good Programmer</Person>
//          <Person name={personsState.persons[2].name} age={personsState.persons[2].name}/>
         
//        </div>
//      );
//     // return ( React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello')));
//     //in abouve method we use that Handler part to indicate that this is a eventHandler
// }

//export default app;
/////////////////
   //** look at this below switchHanlder method */
   //**when execute it ,it does not rerender the dom */
   //**what is the reason for that */
   //** we can not change state  directly like (this this.state.persons[0].name = 'Mihiran';) */
   //** react not recognized it */
   //**we can use setState() for that */


/*const switchNameHandler = () =>{
  //console.log('Was clicked');
  //this.state.persons[0].name = 'Mihiran'; do not use this
  this.setState({
    persons: [
      { name: 'Upul' , age: 28},
      { name: 'Pasan' , age: 27},
      { name: 'Madhu', age: 25}
    ]
  });
};*/






// state = {
//     persons: [
//       { name: 'Shashika' , age: 28},
//       { name: 'Nalin' , age: 27},
//       { name: 'Saduni', age: 25}
//     ],
//     otherState: 'some other value'
//   }*/

//   //** here we are using the setState() */
//   //** */


//   switchNameHandler = () =>{
//     //console.log('Was clicked');
//     //this.state.persons[0].name = 'Mihiran'; do not use this
//     this.setState({
//       persons: [
//         { name: 'Upul' , age: 28},
//         { name: 'Pasan' , age: 27},
//         { name: 'Madhu', age: 25}
//       ]
//     })




/* <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
I am a good Programmer</Person> */

//here you can see that there is a statement between the opening and closing tags
//if we want to pass them to the component we have to use props.children

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}