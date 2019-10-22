import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';


class App extends Component {

    constructor(props) {
        super(props); 
        console.log('[App.js] constructor'); 
    }

    state = {
        person: [
            { id: 'sdf23', name: 'Max', age: 21 },
            { id: 'sadfg2', name: 'Mark', age: 12 },
            { id: 'kughhu78', name: 'Mary', age: 29 },
        ],
        otherState: 'some value here',
        showPersons: false,
        showCockpit: true,
    };
    
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props)
        return state;
    };

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js shouldcomponentUpdate]');
        return true;
    };

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
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
        const doesShow = this.state.showPersons;
        // toggle showPerson boolean
        this.setState({ showPersons: !doesShow});
    };

    render() {
        console.log('[App.js] ....render');

        let persons = null;

        // to render jsx () is needed
        if (this.state.showPersons) {
            persons = <Persons 
                        person={this.state.person}
                        clicked={this.deletePersonHandler} 
                        changed={this.nameChagedHandler} 
                    />
              
        };

        return (
            <Aux>
                <button onClick={() => {this.setState({ showCockpit: false })}}>click to remove Cockpit</button>
                {this.state.showCockpit ? <Cockpit 
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personLength={this.state.person.length}
                    click={this.togglePersonHandler}
                /> : null}

                {persons}
            </Aux>
        );
    };
};

export default withClass(App, classes.App);

























