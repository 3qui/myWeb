import React from 'react';
import { Menu, Icon, Popover, Affix } from 'antd';
import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import * as Mixin from '@/utils/mixing'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        current:''
    }

    componentDidMount(){
        // 获取当前菜单的current
        let current = Mixin.getSession('current')
        this.setState({
            current:current?current:'main'
        })
    }

    handleClick = (e) => {
        console.log(e)
        this.setState({
            current:e.key
        })
        // 设置缓存
        Mixin.setSession('current',e.key)
    }

    render(){
        let webInfo = this.props.webInfo
        return (
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.topBannerIn}>
                        <div className={styles.title}>{webInfo.title}</div>
                        <div className={styles.topright}>
                        <Popover content='github' trigger="hover">
                            <i className={[`iconfont`,`icon-github`,`${styles.iconfont}`].join(' ')}></i>
                        </Popover>
                        <Popover content='码云' trigger="hover">
                            <i className={[`iconfont`,`icon-git`,`${styles.iconfont}`].join(' ')}></i>
                        </Popover> 
                        <Popover content='微博' trigger="hover">
                            <i className={[`iconfont`,`icon-weibo`,`${styles.iconfont}`].join(' ')}></i>
                        </Popover>  
                            
                        </div>
                    </div>
                </div>
                <Affix>
                    <div className={styles.menuBox}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            className={styles.menuItemIn}
                        >
                            <Menu.Item key="main" className={styles.menuItemBox}>
                                <Link to="/main/home">
                                    <Icon type="home" />首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="article" className={styles.menuItemBox}>
                                <Link to="/main/article">
                                    <Icon type="switcher" />列表
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="Info" className={styles.menuItemBox}>
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