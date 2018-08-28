import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {

        assignedClasses.push('red'); // classes = ['red']

    }

    if (props.persons.length <= 1) {

        assignedClasses.push('bold'); // classes = ['red','bold']

    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi I'm a react app</h1>
            <h2>Some other text</h2>
            <p className={assignedClasses.join(' ')}>this is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle name
            </button>
        </div>

    );

};


export default cockpit;