import React, { useState } from 'react';
import './App.css';
// import { directive } from '@babel/types';
import Person from './Person/Person'

const App = props => {

    const [personState, setPersonsState] = useState({
        person: [
            { name: 'Max', age: 28 },
            { name: 'Mark', age: 26 },
            { name: 'Stephanie', age: 19 },
        ],
    });
    
    const [otherState, setOtherState] = useState('some other value');

    console.log(personState, otherState);
    
    // Event Handler
    const switchNameHandler = () => {
        // console.log('Switch was clicked');

        // setState({}) is to change state
        setPersonsState({
            person: [
                { name: 'Mark', age: 26 },
                { name: 'Stephanie', age: 27 },
                { name: 'Max', age: 28 },
            ],
        });
    };

    return (
        <div className="App">
            <h1>Hi I'm a React App</h1>
            <button onClick={switchNameHandler}>Change Name</button>
            <Person name={personState.person[0].name} age={personState.person[0].age}/>
            <Person name={personState.person[1].name} age={personState.person[1].age}>My Hobbies: Racing</Person>
            <Person name={personState.person[2].name} age={personState.person[2].age}/>
        </div>
    );
};

export default App;














