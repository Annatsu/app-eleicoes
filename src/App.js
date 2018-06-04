// React
import React from 'react';

// React Router
import {
    Route,
    Switch,
} from 'react-router-dom';


// Application Routes
import routes from './routes';


const APP_PREFIX = 'Eleições 2018';


const App = () => (
    <Switch>
        {
            routes.map((r, i) => (
                <Route
                    key={r.id}
                    path={r.url}
                    render={() => {
                        document.title = `${r.title} | ${APP_PREFIX}`;
                        return r.component;
                    }}
                    exact={i === 0} />
            ))
        }
    </Switch>
);


export default App;
