import React from 'react';
import { Row, Col, Tag } from 'antd';
import styles from './index.module.scss'
import * as API_user from '@/api/user'
import formatDate from '@/utils/mixing'

export default class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            data:{}
        }
    }

    componentDidMount(){
        API_user.userInfo().then(response =>{return response.json()})
            .then(result => {
                console.log(result)
                this.setState({
                    data:result.data
                })
            })
    }

    render() {
        // Tag技能标签
        let Skilltags = () => {
            let tagChildData =  this.state.data.skillTags?this.state.data.skillTags : []
            return tagChildData.map((child,index)=>{
                return (
                    <Tag 
                     color="blue" 
                     key={index}
                    >
                        {child}
                    </Tag>
                )
            })
        }
        // Hobby爱好标签
        let Hobbytags = () => {
            let hobbyChildData =  this.state.data.hobbyTags?this.state.data.hobbyTags : []
            return hobbyChildData.map((child,index)=>{
                return (
                    <Tag 
                     color="volcano" 
                     key={index}
                    >
                        {child}
                    </Tag>
                )
            })
        }
        
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
                            <Skilltags />
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            爱好：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            <Hobbytags />
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            个人简介：
                        </Col>
                        <Col span={20} className={styles.itemContent}>
                            <div className={styles.aboutMe} dangerouslySetInnerHTML={{__html:this.state.data.introduction}}></div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
