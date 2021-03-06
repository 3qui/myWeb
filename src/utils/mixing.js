
// 时间格式化 年-月-日
export function formatDate(date){
    let d = new Date(date);
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let day = d.getDate()
    // let hour = d.getHours()
    // let minutes = d.getMinutes()
    // let secends = d.getSeconds();
    return year + '-' + (month>10?month:'0'+ month) + '-' + (day>10?day:'0'+ day)
}

// 设置临时缓存 session
export function setSession(key,data){
    return sessionStorage.setItem(key,JSON.stringify(data))
}

// 获取临时缓存 session
export function getSession(key){
    return JSON.parse(sessionStorage.getItem(key))
}