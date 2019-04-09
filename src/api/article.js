import request from '@/utils/fetch'


/*****
 * 获取文章列表
 * @getArticle
 */
export function getArticle(){
    return request(
        'http://localhost:3000/article/article',
        {
            method:'GET'  
        }        
    )
}

/*****
 * 获取文章详情
 * @getArticleDetail
 */
export function getArticleDetail(_id){
    return request(
        `http://localhost:3000/article/articleDetail?_id=` + _id,
        {
            method:'GET'
        }        
    )
}



