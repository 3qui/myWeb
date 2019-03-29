import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AboutIn from './aboutIn'

export default class Main extends React.Component {
    
    render() {
        return (
            <div>
                我是About
                <Route path='/main/about2' component={AboutIn}></Route>
            </div>
        )
    }
}
