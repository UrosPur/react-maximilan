import React from 'react';
import './UserOutput.css';


const user = (props) => {

    return (
        <div className="user-test">
        <p>User name is {props.username}</p>
        </div>
    )

}

export default user;