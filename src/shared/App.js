import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Navigate } from '../pages';


class App extends Component {
    render() {
        return (
            <div id = 'App'>
                <Route exact path="/" component={Home}/>
                <Route path="/Navigate" component={Navigate}/>
            </div>
        );
    }
}

export default App;