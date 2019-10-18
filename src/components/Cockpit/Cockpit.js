import React from 'react';
import classes from './Cockpit.module.css';


const cockpit = (props) => {

    //Dynamic css rendering
    const assignedClasses = [];

    let btnClass = '';
    if (!props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.person.length <= 2) {
        assignedClasses.push(classes.red); //assignedClasses = ['red']
    };
    if (props.person.length <= 1) {
        assignedClasses.push(classes.bold); //assignedClasses = ['red', 'bold]
    };

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is Really Working</p>
            <button
                className={btnClass}
                onClick={props.click}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;


























