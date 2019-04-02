import React from 'react';
import { Row, Col, Divider } from 'antd';
import styles from "./index.module.scss"
import ArticleCard from "../publicComponents/articleCard"


let arr = [
    { title: '同域名下两个静态链接之间的301跳转实现方法', looker: 500, id: 1},
    { title: 'phpcms修改后台登录函数详细步骤', looker: 900, id: 2},
    { title: '如何更好地利用百度搜索资源平台反馈中心快速解决文章原创问题', looker: 1000, id: 3},
    { title: '彻底解决win10文件夹右上角出现箭头的方法', looker: 2000, id: 4},
    { title: '整理出360流氓蜘蛛所有ip段，拿走不谢', looker: 5000, id: 5},
    { title: '详解rss订阅（如何在网站添加rss订阅功能和如何订阅自己喜欢的网站）', looker: 8888, id: 6},
]
export default class Main extends React.Component {
    
    render() {
        return (
            <div className={styles.mainContent}>
                <Row className={styles.mainContentIn}>
                    {/* 左侧内容 */}
                    <Col className={styles.mainArticle} span={15}>
                        <ArticleCard articleCards={arr}/>
                    </Col>
                    {/* 右侧区域 */}
                    <Col className={styles.mainSide} span={8} offset={1}>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}
