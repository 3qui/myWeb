import React from 'react';
import { Row, Col } from 'antd';
import styles from "./index.module.scss"
import ArticleCard from "@/components/main/publicComponents/articleCard"

import * as API_article from "@/api/article"

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articleCards:[]
        }
    }

    componentDidMount(){
        API_article.getArticle().then(response =>{return response.json()})
            .then(result => {
                console.log(result)
                this.setState({
                    articleCards:result.data
                })
            })
    }

    render() {

        return (
            <div className={styles.mainContent}>
                <Row className={styles.mainContentIn}>
                    {/* 左侧内容 */}
                    <Col className={styles.mainArticle} span={15}>
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
                    <Col className={styles.mainSide} span={8} offset={1}>
                        <div className={[`${styles.sideInBox}`,`${styles.sideTitleBox}`].join(' ')}>
                            这是我的个人网站，什么内容都有，都有都有都有都有都有都有都有都有都有都有。
                        </div>
                        <div className={[`${styles.sideInBox}`,`${styles.sideTitleBox2}`].join(' ')}>
                            这是内容内容内容内容这是内容内容内容内容这是内容内容内容内容这是内容内容内容内容这是内容内容内容内容
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
