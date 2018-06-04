// React
import React from 'react';


const FormGroup = ({
    children,
    ...rest
}) => (
        <div className="form-group" {...rest}>
            {children}
        </div>
    );


export default FormGroup;
