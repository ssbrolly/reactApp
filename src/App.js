import React, { Component } from 'react';
import classes from './App.module.css';
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

        const personIndex = this.state.person.findIndex(p => p.id === id);
        const person = {...this.state.person[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.person];
        persons[personIndex] = person;

        this.setState({ person: persons });
    };

    togglePersonHandler = () => {
        // const doesShow = this.state.showPersons;
        // toggle showPerson boolean
        this.setState({ showPersons: !this.state.showPersons });
    };

    render() {

        let persons = null;
        let btnClass = '';

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
            btnClass = classes.Red;
        };

        //Dynamic css rendering
        const assignedClasses = [];

        if (this.state.person.length <= 2) {
            assignedClasses.push(classes.red); //assignedClasses = ['red']
        };
        if (this.state.person.length <= 1) {
            assignedClasses.push(classes.bold); //assignedClasses = ['red', 'bold]
        };

        return (
            <div className={classes.App}>
                <h1>Hi I'm a React App</h1>
                <p className={assignedClasses.join(' ')}>This is Really Working</p>
                <button 
                    className={btnClass}
                    onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
       
        );
    };
};

export default App;



























