import React from 'react';


const user = (props) =>{

    return (
        <div>
            <input type="text" onChange={props.change} value={props.username}/>

        </div>

    )

}

export default user;