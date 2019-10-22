import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';
// import Aux from '../../hoc/Aux';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(()=> {
        //     alert('Saved something to the cloud');
        // }, 1000)
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in progress');

        }
    });

    //Dynamic css rendering
    const assignedClasses = [];

    let btnClass = '';
    if (!props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personLength <= 2) {
        assignedClasses.push(classes.red); //assignedClasses = ['red']
    };
    if (props.personLength <= 1) {
        assignedClasses.push(classes.bold); //assignedClasses = ['red', 'bold]
    };

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Hello World!</p>
            <button
                className={btnClass}
                onClick={props.click}>Toggle Persons</button>
        </div>
    );
}

export default React.memo(Cockpit);


























