import React from 'react';
import styles from "./index.module.scss"
import { Link } from 'react-router-dom'
import formatDate from '@/utils/mixing'


export default class articleCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        return (
            this.props.articleCards.map((item,index) => {
                return (
                    <div className={styles.articleSingle} key={index}>
                        <div className={styles.imgBox}>
                            <img src={item.imageUrl} alt=""/>
                        </div>
                        <div className={styles.singleRight}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.boxDec}>
                                <div className={styles.decBoxIn}>
                                    <i className={[`${`iconfont`}`,`${`icon-shijian`}`,`${styles.shijian}`].join(' ')}></i>
                                    <span>{formatDate(item.createTime)}</span>
                                </div>
                                <div className={styles.decBoxIn}>
                                    <i className={[`${`iconfont`}`,`${`icon-yanjing`}`,`${styles.yanjing}`].join(' ')}></i>
                                    <span>500</span>
                                </div>
                                <div className={styles.decBoxIn}>
                                    <i className={[`${`iconfont`}`,`${`icon-yonghu`}`,`${styles.yonghu}`].join(' ')}></i>
                                    <span>Jose</span>
                                </div>
                            </div>
                            <div className={styles.articleSortDec}>
                                {item.description}
                            </div>
                            <div className={styles.moreBtn}>
                                <Link to={'/main/article/detail/' + item._id} className={`normal-a`}>
                                    查看全文<i className={[`${`iconfont`}`,`${`icon-youjiantou`}`,`${styles.iconfont}`].join(' ')}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
            
        )
    }
}
