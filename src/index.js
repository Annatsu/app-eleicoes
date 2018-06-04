// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import {
    BrowserRouter as Router
} from 'react-router-dom';


// Application Container
import App from './App';


// Mounts the App into the DOM node.
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('react-root')
);
