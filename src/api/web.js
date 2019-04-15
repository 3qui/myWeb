import request from '@/utils/fetch'

export function webInfo(){
    return request(
        'http://localhost:3000/web/webInfo',
        {
            method:'GET'  
        }        
    )
}
