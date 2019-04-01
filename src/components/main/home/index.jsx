import React from 'react';
import { Row, Col } from 'antd';
import "./index.scss"
import ArticleCard from "../publicComponents/articleCard"



export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articleCards:[
                { title: '彻底解决win10文件夹右上角出现箭头的方法', looker: 500, id: 1},
                { title: '同域名下两个静态链接之间的301跳转实现方法', looker: 900, id: 2},
                { title: '如何更好地利用百度搜索资源平台反馈中心快速解决文章原创问题', looker: 1000, id: 3},
                { title: 'phpcms修改后台登录函数详细步骤', looker: 2000, id: 4},
                { title: '整理出360流氓蜘蛛所有ip段，拿走不谢', looker: 5000, id: 5},
                { title: '详解rss订阅（如何在网站添加rss订阅功能和如何订阅自己喜欢的网站）', looker: 8888, id: 6},
            ]
        }
    }

    render() {

        return (
            <div className="mainContent">
                <Row className="mainContentIn">
                    {/* 左侧内容 */}
                    <Col className="mainArticle" span={15}>
                        {/* 循环列表 */}
                        <ArticleCard articleCards={this.state.articleCards}/>
                        {/* {
                            lists.map((item,index) => {
                                return (
                                    <div className="articleSingle" key={index}>
                                        <div className="imgBox">
                                            <img src="http://pic17.nipic.com/20111031/8166867_002049106165_2.jpg" alt=""/>
                                        </div>
                                        <div className="singleRight">
                                            <div className="title">{item.title}</div>
                                            <div className="boxDec">
                                                <div className="decBoxIn">
                                                    <i className="iconfont icon-yonghu"></i>
                                                    <span>2019-03-24</span>
                                                </div>
                                                <div className="decBoxIn">
                                                    <i className="iconfont icon-yanjing"></i>
                                                    <span>{item.looker}</span>
                                                </div>
                                                <div className="decBoxIn">
                                                    <i className="iconfont icon-shijian"></i>
                                                    <span>Jose</span>
                                                </div>
                                            </div>
                                            <div className="articleSortDec">
                                                本以为写了文章“301跳转规则的复杂写法及详细解读”之后我对301跳转已经有一个非常深入的认识了，但是这次导航改版同域名下静态链接之间的301跳转又把我难住了，301跳转看起来简单，但是它的情况非常多。
                                            </div>
                                            <div className="moreBtn">
                                                <Link to={'/main/article/detail/' + item.id} className="normal-a">
                                                    查看全文<i className="iconfont icon-youjiantou"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } */}
                        
                    </Col>
                    {/* 右侧区域 */}
                    <Col className="mainSide" span={8} offset={1}>
                        <div className="sideInBox sideTitleBox">
                            这是我的个人网站，什么内容都有，都有都有都有都有都有都有都有都有都有都有。
                        </div>
                        <div className="sideInBox sideTitleBox2">
                            这是内容内容内容内容这是内容内容内容内容这是内容内容内容内容这是内容内容内容内容这是内容内容内容内容
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
