import React from 'react';
import { Row, Col, Divider } from 'antd';
import styles from "./detail.module.scss"

export default class Main extends React.Component {
    
    // 生命周期函数
    componentDidMount(){
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div className={styles.mainContent}>
                <Row className={styles.detailContentIn}>
                    {/* 左侧内容 */}
                    <Col className={styles.mainArticle} span={15}>
                        <div className={styles.articleTitle}>文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</div>
                        <div className={styles.articleDec}>
                            <div className={styles.decDate}>发布时间：2019-04-01</div>
                            <div className={styles.decLookNum}>浏览数：(50)</div>
                        </div>
                        <Divider style={{marginTop:20,marginBottom:20}}/>
                        <div className={styles.articleDetail}>
                        了解phpcms的都知道，若不修改后台登录函数，其它方法修改后台路径，后台地址依然是域名/index.php?m=admin&c=index&a=login，只有修改了后台登录函数，才能彻底修改后台地址。

                        先说说折腾过程：
                        
                        刚开始参考的教程：https://www.cnblogs.com/suskart/p/3793429.html，这篇文章应该是从哪抄过来的，并不是实操编写，文中有多处错误，比如刚开始说某某路径下是可以没有文件的，这纯粹是扯淡；再比如3.2把替换代码写反了，在文章“phpcms表单向导使用教程”末尾我写道APP_PATH是网站的动态域名也就是v9的首页，既然是避免跳转到首页那此处就是写反了，而且也没强调修改函数；文末一句话说的糊里糊涂的，就算你往对里想也跟文章开头冲突。我最讨厌这种不负责任的文章，百度的内容生态就是被这样破坏的，这也是我为什么要在骆海滨的文章评论区辩论的原因。

                        然后我想到群友在群里分享的phpcms修订版把后台登录函数设定为在安装时可以自定义，我就把文件拉出来安装了，然后打开上面不负责任教程里说的几个文件对照着改，完美修改后台登录函数。

                        废话完了，重点开始：

                        第一步：新建一个文件夹，比如myadmin，里面放index.php，代码如下：
                        </div>
                    </Col>
                    {/* 右侧区域 */}
                    <Col className="mainSide" span={8} offset={1}>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}
