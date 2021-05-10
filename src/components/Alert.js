import React from 'react';

const Alert = ({msg, alertType}) => msg && alertType ? (
    <div className={`alert alert-${alertType}`}>
        {msg}
    </div>
): null;

export default Alert;