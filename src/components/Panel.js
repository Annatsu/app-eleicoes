// React
import React from 'react';

// Emotion
import styled from 'react-emotion';


const PanelContainer = styled('div') `
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;


const Panel = ({
    children,
    ...rest
}) => (
        <PanelContainer {...rest}>
            {children}
        </PanelContainer>
    );


export const PanelTitle = styled(({ children, className, ...rest }) => (
    <div className={`text-center ${className}`} {...rest}>
        <h3 style={{ marginTop: '10px' }}>{children}</h3>
    </div>
)) `
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .4);
`;


export const PanelBody = styled('div') `
    padding-top: 10px;
`;


export default Panel;
