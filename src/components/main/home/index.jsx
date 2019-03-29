import React from 'react';
import { Row, Col } from 'antd';
import "./index.scss"


export default class Main extends React.Component {
    
    render() {
        return (
            <div className="mainContent">
                <Row className="mainContentIn">
                    {/* 左侧内容 */}
                    <Col className="mainArticle" span={15}>
                        <div className="articleSingle">
                            <img src="https://www.weiyiqi.net/uploadfile/2018/1218/20181218110815910.jpg" alt=""/>
                            <div className="singleRight">
                                <div className="title">MongoDB+Node搭建后台管理系统</div>
                                
                            </div>
                        </div>
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
