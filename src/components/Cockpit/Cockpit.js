import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';
// import Aux from '../../hoc/Aux';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null); 

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(()=> {
        //     alert('Saved something to the cloud');
        // }, 1000)

        toggleBtnRef.current.click();
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
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.click}>Toggle Persons
            </button> 
            <button onClick={props.login}>Log in</button>
        </div>
    );
}

export default React.memo(Cockpit);


























