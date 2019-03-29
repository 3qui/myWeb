import React from 'react';
import { Menu, Icon, Popover, Affix } from 'antd';
import { Link } from 'react-router-dom'
import './header.scss'

export default class Header extends React.Component {
    state = {
        current:'main'
    }

    handleClick = (e) => {
        console.log(e)
        this.setState({
            current:e.key
        })
    }

    render(){
        return (
            <header>
                <div className="topBanner">
                    <div className="topBannerIn">
                        <div className="title">Jose的个人网站</div>
                        <div className="topright">
                        <Popover content='github' trigger="hover">
                            <i className="iconfont icon-github"></i>
                        </Popover>
                        <Popover content='码云' trigger="hover">
                            <i className="iconfont icon-git"></i>
                        </Popover> 
                        <Popover content='微博' trigger="hover">
                            <i className="iconfont icon-weibo"></i>
                        </Popover>  
                            
                        </div>
                    </div>
                </div>
                <Affix>
                    <div className="menuBox">
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            className="menuItemIn"
                        >
                            <Menu.Item key="main" className="menuItemBox">
                                <Link to="/main/home">
                                    <Icon type="home" />首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="article" className="menuItemBox">
                                <Link to="/main/article">
                                    <Icon type="switcher" />列表
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="Info" className="menuItemBox">
                                <Link to="/main/user">
                                    <Icon type="user" />我的
                                </Link>
                            </Menu.Item>
                        </Menu> 
                    </div>
                </Affix>
            </header>
        )
    }
}