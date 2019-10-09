import React, { Component } from 'react';
import './App.css';
// import { directive } from '@babel/types';
import Person from './Person/Person'

class App extends Component {

    state = {
        person: [
            { name: 'Max', age: 21 },
            { name: 'Mark', age: 12 },
            { name: 'Mary', age: 29 },
        ]
    };
    
    switchNameHandler = (newName) => {
        this.setState({
            person: [
                { name: newName, age: 21 },
                { name: 'Dory', age: 12 },
                { name: 'David', age: 29 },
            ]
        });
    };

    nameChagedHandler = (event) => {
        this.setState({
            person: [
                { name: 'Max', age: 21 },
                { name: event.target.value, age: 12 },
                { name: 'David', age: 29 },
            ]
        });
    }

    render() {

         const style = {
             backgroundColor: 'white',
             font: 'inherit',
             border: '1px solid blue',
             padding: '8px',
             cursor: 'pointer',
         };

        return (
            <div className="App">
                <h1>Hi I'm a React App</h1>
                <button style={style} onClick={() => this.switchNameHandler('Maximilian')}>Change Name</button>
                <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
                <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler.bind(this, 'Maximilian')} changed={this.nameChagedHandler}>My Hobbies: Racing</Person>
                <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
            </div>
        );
    };
};

export default App;








 













