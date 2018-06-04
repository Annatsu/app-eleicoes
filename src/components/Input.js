// React
import React from 'react';


const Input = ({
    id,
    className = '',
    type = 'text',
    ...rest
}) => (
    <input
        type={type}
        className={`form-control ${className}`}
        id={id}
        name={id}
        {...rest} />
);


export default Input;
