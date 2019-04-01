import React from 'react';
import Header from './header'
import Footer from './footer'
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Home from './home'
import Article from './article'
import User from './user'
import ArticleDetail from './article/detail'


export default class Main extends React.Component {
    
    render() {
        return (
            <div>
                <Header />
                <div className="mainContainer" style={{marginTop:20,paddingBottom:50}}>
                    <Switch>
                        <Route path='/main/home' component={Home}></Route>
                        <Route exact path='/main/article' component={Article}></Route>
                        <Route path='/main/article/detail/:id' component={ArticleDetail}></Route>
                        <Route path='/main/user' component={User}></Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}
