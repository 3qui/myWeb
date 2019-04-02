import React from 'react';
import { Row, Col, Tag } from 'antd';
import styles from './index.module.scss'


export default class Main extends React.Component {
    
    render() {
        return (
            <div className={styles.mainContent}>
                <div className={styles.mainContentIn}>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel }>
                            姓名：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            Jose
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            性别：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            男
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            出生年月：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            1993-10-08
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            微信：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            wzz-9624tty
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            邮箱：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            864925897@qq.com
                        </Col>
                    </Row>
                    <Row className={styles.itemRow}>
                        <Col span={3} className={styles.itemLabel}>
                            技能：
                        </Col>
                        <Col span={21} className={styles.itemContent}>
                            <Tag color="blue">blue</Tag>
                            <Tag color="blue">blue</Tag>
                            <Tag color="blue">blue</Tag>
                            <Tag color="blue">blue</Tag>
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
                            WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
