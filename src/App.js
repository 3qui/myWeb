import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import Login from './components/login' 
import Main from './components/main/index'
import NotFound from './components/404'
import About from './components/about'

const bgGround = {
  width:'100%',
  height:'100%',
  position:'fixed',
  background:`url(${require("./assets/images/bg.png")})`,
  zIndex:'-1'

}

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg_img" style={bgGround}></div>
        <Router>
          <div >
            <div>
              <Switch>
                <Redirect exact={true} path="/" to={{pathname: '/main/home'}} />
                <Route path='/main' component={Main}></Route>
                <Route path='/about' component={About}></Route>
                <Route component={NotFound} />
              </Switch>
            </div>
            
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
