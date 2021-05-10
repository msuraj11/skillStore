import React from 'react';

const Card = (props) => (
    <div className={`card ${props.className}`}>
        {props.children}
    </div>
);

export default Card;