import React, {Component} from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
    state = {

        persons: [
            {id: 1, name: "Sima", age: 28},
            {id: 2, name: "Marina", age: 30},
            {id: 3, name: "Dusan", age: 35},
            {id: 4, name: "Mirko", age: 34}
        ],

        username: "John",

        showPersons: false

    }

    nameChangedHandeler = (event, id) => {


        const personIndex = this.state.persons.findIndex(singlePerson => {
            return singlePerson.id === id;
        });


        //spread operator copies the person to a new variable
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const allPersons = [...this.state.persons];

        allPersons[personIndex] = person;

        this.setState({persons: allPersons})


    }

    deletePersonHandler = (personIndex) => {

        //slice without arguments copies the array
        // const currentPersons = this.state.persons.slice();


        //modern method spread operator ...
        const currentPersons = [...this.state.persons]

        currentPersons.splice(personIndex, 1);
        this.setState({
            persons: currentPersons
        })

    }

    togglePersonsHandeler = () => {

        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });

    }


    render() {
        const style = {


            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {

            persons = (
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandeler}
                    />

            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersonss}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandeler}
                />
                {persons}
            </div>
        );

        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!'))
    }
}

export default App;
