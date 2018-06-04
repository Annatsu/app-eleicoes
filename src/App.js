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


const HackyPhone = styled('div') `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 375px;
    height: 667px;
`;


const App = () => (
    <HackyPhone>
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
    </HackyPhone>
);


export default App;
