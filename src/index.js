import React from 'react';
import ReactDOM from 'react-dom';

import topics from './data/topics';
import articles from './data/articles';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

import 'material-components-web/dist/material-components-web.css';
import './index.css';

ReactDOM.render(
    <Router>
        <App topics={topics} articles={articles} />
    </Router>
    , document.getElementById('root')
);