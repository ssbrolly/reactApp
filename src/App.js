import React, { Component } from 'react';
import './App.css';
// import { directive } from '@babel/types';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi I'm a React App</h1>
                <Person name="Max" age="28"/>
                <Person name="Mark" age="26">My Hobbies: Racing</Person>
                <Person name="Stephanie" age="19,"/>
            </div>
        );
    };
};

export default App;
