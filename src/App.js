// React
import React from 'react';

// React Router
import {
    Route,
    Switch,
} from 'react-router-dom';

// Emotion
import styled from 'react-emotion';


// Application Routes
import routes from './routes';


const APP_PREFIX = 'Eleições 2018';


const Container = styled(({ children, className, ...rest }) => (
    <div className={`container ${className}`} {...rest}>
        <div className="row">
            <div className="col-xs-12">
                {children}
            </div>
        </div>
    </div>
)) `
    padding: 10px;
`;


const App = () => (
    <Container>
        <Switch>
            {
                routes.map((r, i) => (
                    <Route
                        key={r.id}
                        path={r.url}
                        render={() => {
                            document.title = `${r.title} | ${APP_PREFIX}`;
                            const Component = r.component;
                            return <Component />;
                        }}
                        exact={i === 0} />
                ))
            }
        </Switch>
    </Container>
);


export default App;
