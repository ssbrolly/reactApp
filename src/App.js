import React, { Component } from 'react';
import './App.css';
// import { directive } from '@babel/types';
import Person from './Person/Person'
import { throwStatement } from '@babel/types';

class App extends Component {

    state = {
        person: [
            { id: 'sdf23', name: 'Max', age: 21 },
            { id: 'sadfg2', name: 'Mark', age: 12 },
            { id: 'kughhu78', name: 'Mary', age: 29 },
        ],
        otherState: 'some value here',
        showPersons: true
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

    deletePersonHandler = (personIndex) => {
        // slice the array to prevent bugs. slice() will make a copy of the array and not mutate the original state
        // const persons = this.state.person.slice();

        // es7 version using spread operator
        const persons = [...this.state.person]
        persons.splice(personIndex, 1);
        this.setState({ person: persons });
    };

    nameChagedHandler = (event, id) => {

        // Get the Index of the person that matches the id; 
        const personIndex = this.state.person.findIndex(p => p.id === id);

        // Do not mutate the state object directly, Use spread operator to make a copy of the object
        const person = {...this.state.person[personIndex]};

        // Set the person.name to the value passed in the input field;
        person.name = event.target.value;

        // Do not mutate the state object directly using spread operator to make a copy of the object;
        const persons = [...this.state.person];

        // Set the person at the index to the person identified by the id
        persons[personIndex] = person;

        //update the state;
        this.setState({ person: persons });
    };

    togglePersonHandler = () => {
        // const doesShow = this.state.showPersons;
        // toggle showPerson boolean
        this.setState({ showPersons: !this.state.showPersons});
    };

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;

        // to render jsx () is needed
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.person.map((person, index) => {
                        return <Person 
                            click={() => this.deletePersonHandler(index)} 
                            name={person.name} 
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChagedHandler(event, person.id)}
                        />
                    })}
                </div>
            );
        };

        return (
             <div className="App">
                <h1>Hi I'm a React App</h1>
                <button 
                    style={style} 
                    onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    };
};

export default App;

































