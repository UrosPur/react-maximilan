import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput'


class App extends Component {
    state = {

        persons: [
            {name: "Sima", age: 28},
            {name: "Marina", age: 30},
            {name: "Dusan", age: 35}
        ],

        username:"John"

    }

    switchNameHandler = (newName) => {
        // console.log('was clicked')
        // DON't DO THIS this.state.persons[0].name = "Maximilian";

        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Marina", age: 30},
                {name: "Dusan", age: 35}
            ]

        })

    }

    nameChangedHandeler = (event) => {


        this.setState({
            persons: [
                {name: "Uros", age: 28},
                {name: event.target.value, age: 30},
                {name: "Dusan", age: 35}
            ]

        })


    }

    changeUsernameHandeler = () => {

        this.setState({
            username:'Sima'
        })


    }

    updateUsernameHandeler = (event) =>{

       this.setState({
           username:event.target.value

       })

    }


    render() {

        const style = {

            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'

        };


        return (
            <div className="App">
                <h1>Hi I'm a react app</h1>
                <h2>Some other text</h2>
                <p>this is really working</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Gjegima')}>Switch name
                </button>

                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Darko!!')}
                    changed={this.nameChangedHandeler}
                >

                    My hobbies: racing

                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>



                <button onClick={this.changeUsernameHandeler}>Change user name</button>

                <UserOutput
                username={this.state.username}
                />
                <UserOutput
                    username={this.state.username}
                />
                <UserOutput
                    username={this.state.username}
                />
                <UserInput
                change={this.updateUsernameHandeler}
                username={this.state.username}


                />
            </div>
        );

        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!'))
    }
}

export default App;
