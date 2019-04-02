import React from 'react';
import styles from "./index.module.scss"
import { Link } from 'react-router-dom'


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
                            <img src="http://pic17.nipic.com/20111031/8166867_002049106165_2.jpg" alt=""/>
                        </div>
                        <div className={styles.singleRight}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.boxDec}>
                                <div className={styles.decBoxIn}>
                                    <i className={[`${`iconfont`}`,`${`icon-shijian`}`,`${styles.shijian}`].join(' ')}></i>
                                    <span>2019-03-24</span>
                                </div>
                                <div className={styles.decBoxIn}>
                                    <i className={[`${`iconfont`}`,`${`icon-yanjing`}`,`${styles.yanjing}`].join(' ')}></i>
                                    <span>{item.looker}</span>
                                </div>
                                <div className={styles.decBoxIn}>
                                    <i className={[`${`iconfont`}`,`${`icon-yonghu`}`,`${styles.yonghu}`].join(' ')}></i>
                                    <span>Jose</span>
                                </div>
                            </div>
                            <div className={styles.articleSortDec}>
                                本以为写了文章“301跳转规则的复杂写法及详细解读”之后我对301跳转已经有一个非常深入的认识了，但是这次导航改版同域名下静态链接之间的301跳转又把我难住了，301跳转看起来简单，但是它的情况非常多。
                            </div>
                            <div className={styles.moreBtn}>
                                <Link to={'/main/article/detail/' + item.id} className={`normal-a`}>
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
