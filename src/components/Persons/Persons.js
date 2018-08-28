import React from 'react';
import Person from "./Person/Person";

{/*// map ->maps javascript array of object,strings... to jsx array*/}
{/*//react pulls elements and displays them to the 'screen'*/}


const persons = (props) => props.persons.map((singleArrayElement, index) => {

        return <Person
            click={() => props.clicked(index)}
            name={singleArrayElement.name}
            age={singleArrayElement.age}
            key={singleArrayElement.id}
            changed={(event) => props.changed(event, singleArrayElement.id)}
        />

    });

export default persons;