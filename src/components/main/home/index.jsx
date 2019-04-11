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
                        <ArticleCard articleCards={this.state.articleCards}/>
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
