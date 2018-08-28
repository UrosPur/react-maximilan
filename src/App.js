import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {

        persons: [
            {id: 1 ,name: "Sima", age: 28},
            {id: 2 , name: "Marina", age: 30},
            {id: 3 ,name: "Dusan", age: 35},
            {id: 4 ,name: "Mirko", age: 34}
        ],

        username:"John",

        showPersons: false

    }


    nameChangedHandeler = (event, id) => {


        const personIndex = this.state.persons.findIndex(singlePerson=>{
            return singlePerson.id === id;
        });



        //spread operator copies the person to a new variable
        const person = {
            ...this.state.persons[personIndex]
        };



        person.name = event.target.value;

        const allPersons = [...this.state.persons];

        allPersons[personIndex] = person;

        this.setState({persons:allPersons})


    }

    deletePersonHandler = (personIndex) => {

        //slice without arguments copies the array
        // const currentPersons = this.state.persons.slice();


        //modern method spread operator ...
        const currentPersons = [...this.state.persons]

        currentPersons.splice(personIndex,1);
        this.setState({
            persons:currentPersons
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
            color:'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if(this.state.showPersons ){

            persons = (


                <div>

                    {/*// map ->maps javascript array of object,strings... to jsx array*/}
                    {/*//react pulls elements and displays them to the 'screen'*/}
                {this.state.persons.map((singleArrayElement,index) => {

                    return <Person
                        name={singleArrayElement.name}
                        age={singleArrayElement.age}
                        click={ () => this.deletePersonHandler(index)}
                        key={singleArrayElement.id}
                        changed={(event) => this.nameChangedHandeler(event,singleArrayElement.id)}
                    />

                })}

                </div>

            );
            style.backgroundColor = 'red';

        }

        return (
            <div className="App">
                <h1>Hi I'm a react app</h1>
                <h2>Some other text</h2>
                <p>this is really working</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandeler}>Toggle name
                </button>

                {persons}

            </div>
        );

        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!'))
    }
}

export default App;
