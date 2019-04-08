import React from 'react';
import { Row, Col, Tag } from 'antd';
import styles from './index.module.scss'
import * as API_test from '@/api/test'
import formatDate from '@/utils/mixing'

export default class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            data:{}
        }
    }

    componentDidMount(){
        API_test.testRequest().then(response => {
                return response.json()
            }).then(result => {
                console.log(result)
                this.setState({
                    data:result.data
                })
                console.log(this.state)
            })
    }

    render() {
        return (
            <div className={styles.mainContent}>
                <div className={styles.mainContentIn}>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel }>
                            姓名：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            {this.state.data.name}
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            性别：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            {this.state.data.sex}
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            出生年月：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            {formatDate(this.state.data.birthday)}
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            微信：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            {this.state.data.wechat}
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            邮箱：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            {this.state.data.email}
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            技能：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            {
                                this.state.data.skillTags.map((index,item) => {
                                    return (
                                        <Tag key={index} color="blue">{item}</Tag>
                                    )
                                })
                            }
                            {/* <Tag color="blue">blue</Tag>
                            <Tag color="blue">blue</Tag>
                            <Tag color="blue">blue</Tag>
                            <Tag color="blue">blue</Tag> */}
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            爱好：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            <Tag color="volcano">volcano</Tag>
                            <Tag color="volcano">volcano</Tag>
                            <Tag color="volcano">volcano</Tag>
                            <Tag color="volcano">volcano</Tag>
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            个人简介：
                        </Col>
                        <Col span={20} className={styles.itemContent}>
                            <div className={styles.aboutMe}>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
