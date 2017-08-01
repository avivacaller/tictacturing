import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import Routes from './routes/' //this is calling the index.js file from this dir

ReactDOM.render(
    <Router
        history={browserHistory}
        routes={Routes}
/>,
    document.getElementById('root')
);

