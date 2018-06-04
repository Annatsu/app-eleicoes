// React
import React from 'react';

// Emotion
import styled from 'react-emotion';


const Container = styled('div') `
    background-color: #fff;
`;


const Panel = ({
    children,
    ...rest
}) => (
    <Container {...rest}>
        {children}
    </Container>
);


export const PanelTitle = styled(({ children, className, ...rest }) => (
    <div className={`text-center ${className}`} {...rest}>
        <h3>{children}</h3>
    </div>
)) `
    padding: 10px;
    border-bottom: 1px solid black;
`;


export default Panel;
