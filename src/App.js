import React, { Component } from 'react';
import './App.css';
// import { directive } from '@babel/types';
import Person from './Person/Person'

class App extends Component {

    state = {
        person: [
            { id: 'sdf23', name: 'Max', age: 21 },
            { id: 'sadfg2', name: 'Mark', age: 12 },
            { id: 'kughhu78', name: 'Mary', age: 29 },
        ],
        otherState: 'some value here',
        showPersons: false
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
        console.log(persons);
        persons.splice(personIndex, 1);
        this.setState({ person: persons });
    };

    nameChagedHandler = (event) => {
        this.setState({
            person: [
                { name: 'Max', age: 21 },
                { name: event.target.value, age: 12 },
                { name: 'David', age: 29 },
            ]
        });
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
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

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.person.map((person, index) => {
                        return <Person 
                            click={() => this.deletePersonHandler(index)} 
                            name={person.name} 
                            age={person.age}
                            key={person.id}
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








 












