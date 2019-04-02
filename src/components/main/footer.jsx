import React from 'react';

import styles from './footer.module.scss'

export default class Footer extends React.Component {
    

    render(){
        return (
            <div className={styles.footerBox}>
                <div>WebSite © www.zgx20.com Jose-个人网站(博客) | 版权所有</div>
            </div>
        )
    }
}