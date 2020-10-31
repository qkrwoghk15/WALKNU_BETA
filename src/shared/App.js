import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Navigate, TimeTable, Excercise } from '../pages';


class App extends Component {
    render() {
        return (
            <div id = 'App'>
                <Route exact path="/" component={Home}/>
                <Route path="/Navigate" component={Navigate}/>
                <Route path="/TimeTable" component={TimeTable}/>
                <Route path="/Excercise" component={Excercise}/>
            </div>
        );
    }
}

export default App;