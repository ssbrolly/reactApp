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
    
    switchNameHandler = () => {

        let name = this.state.person[0].name;
        if (name === 'Max') {
            this.setState({
                person: [
                    { name: 'Dan', age: 21 },
                    { name: 'Don', age: 12 },
                    { name: 'Dory', age: 29 },
                ]
            }); 
        } else {
            this.setState({
                person: [
                    { name: 'Max', age: 21 },
                    { name: 'Mark', age: 12 },
                    { name: 'Mary', age: 29 },
                ]       
            })
        };
    };

    render () {
        return (
            <div className="App">
                <h1>Hi I'm a React App</h1>
                <button onClick={this.switchNameHandler}>Change Name</button>
                <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
                <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler}>My Hobbies: Racing</Person>
                <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
            </div>
        );
    };
};

export default App;








 





















