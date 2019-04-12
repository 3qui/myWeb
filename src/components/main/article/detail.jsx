import React from 'react';
import { Row, Col, Divider } from 'antd';
import styles from "./detail.module.scss"

import * as API_article from "@/api/article"
import * as Minxin from '@/utils/mixing'

export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            detailData:{}
        }
    }


    // 生命周期函数
    componentDidMount(){
        console.log(this.props.match.params.id)
        let article_id = this.props.match.params.id
        API_article.getArticleDetail(article_id).then(resopnse => {return resopnse.json()})
            .then(result => {
                console.log(result)
                this.setState({
                    detailData: result.data
                })
            })
    }

    render() {
        let item = this.state.detailData
        return (
            <div className={styles.mainContent}>
                <Row className={styles.detailContentIn}>
                    {/* 左侧内容 */}
                    <Col className={styles.mainArticle} span={24}>
                        <div className={styles.articleTitle}>{item.title}</div>
                        <div className={styles.articleDec}>
                            <div className={styles.decDate}>发布时间：{Minxin.formatDate(item.createTime)}</div>
                            <div className={styles.decLookNum}>浏览数：(50)</div>
                        </div>
                        <Divider style={{marginTop:20,marginBottom:20}}/>
                        <div className={styles.articleDetail} dangerouslySetInnerHTML={{__html:item.content}} >

                        </div>
                    </Col>
                    {/* 右侧区域 */}
                    {/* <Col className="mainSide" span={8} offset={1}>
                        
                    </Col> */}
                </Row>
            </div>
        )
    }
}
