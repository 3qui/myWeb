import React from 'react';
import { HashRouter as  Route } from 'react-router-dom';
import AboutIn from './aboutIn'

import * as API_test from '@/api/test'



export default class Main extends React.Component {

    componentDidMount(){
        API_test.testRequest().then(response => {
                return response.json()
            }).then(result => {
                console.log(result)
            })
    }

    render() {
        return (
            <div>
                我是About
                <Route path='/main/about2' component={AboutIn}></Route>
            </div>
        )
    }
}
