import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Icon, BackTop } from 'antd';

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

const backUp = {
  height: '40px',
  width: '40px',
  lineHeight: '40px',
  borderRadius: '4px',
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: '20px',
  bottom:'60px'
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
        {/* 返回顶部 */}
        <BackTop style={{bottom:60}}>
          <div className="ant-back-top-inner" style={backUp}><Icon type="to-top" /></div>
        </BackTop>
      </div>
      
    );
  }
}

export default App;
