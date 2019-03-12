import React from 'react';

import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
          <input type="text" onChange={props.changed} value={props.name}  placeholder="Your Name"/>
            <h2 onClick={props.click}>Welcome <span className="userName"> {props.name} </span> , thanks for your visit.</h2>
            <p>{props.children}</p>
          
        </div>
    )
};

export default person;