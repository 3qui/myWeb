import React from 'react';
import Header from './header'
import Footer from './footer'
import { Route, Switch } from 'react-router-dom';
import Home from './home'
import Article from './article'
import User from './user'
import ArticleDetail from './article/detail'

import * as API_web from "@/api/web"

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
// 引入action
import { setPageTitle, setInfoList, setWebInfo } from '@/actions/action.js'


class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let { setPageTitle, setInfoList, setWebInfo } = this.props

        API_web.webInfo().then( response => {return response.json()} )
            .then(result => {
                setWebInfo(result.data)
            })
        
        // 触发setPageTitle action
        //setPageTitle('新的标题')
        // 触发setInfoList action
        // setInfoList()
    }


    render() {
        // 从props中解构store
        let { pageTitle, infoList, webInfo } = this.props
        return (
            <div>
                <Header webInfo={webInfo}/>
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

const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
        infoList: state.infoList,
        webInfo: state.webInfo
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setPageTitle (data) {
            // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
            dispatch(setPageTitle(data))
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
            )*/
        },
        setInfoList (data) {
            dispatch(setInfoList(data))
        },
        setWebInfo (data){
            dispatch(setWebInfo(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)