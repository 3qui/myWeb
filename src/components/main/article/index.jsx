import React from 'react';
import { Row, Col, Divider } from 'antd';
import "./index.scss"

export default class Main extends React.Component {
    
    render() {
        return (
            <div className="mainContent">
                <Row className="mainContentIn articleIndexContentIn">
                    {/* 左侧内容 */}
                    <Col className="mainArticle" span={15}>
                        
                    </Col>
                    {/* 右侧区域 */}
                    <Col className="mainSide" span={8} offset={1}>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}
