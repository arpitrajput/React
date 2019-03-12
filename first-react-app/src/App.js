// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//  <h1> ***** Hello World ******</h1>
//  <h2> This is Arpit Rajput</h2>
//  <h3> My first react app</h3>
//       </div>
//     );
//   }
// }

// export default App;



import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: ''},
    ],
  }


  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: 29 },
      ]
    } )
  }

  render () {
    

    return (
      <div className="App">
        <h1>Hi, This is  my first react app</h1>
<p1>Enter your name </p1>
        <Person 
          name={this.state.persons[0].name} 
          changed={this.nameChangedHandler} ></Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
