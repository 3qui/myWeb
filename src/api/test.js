import request from '@/utils/fetch'

export function testRequest(){
    return request(
        'http://localhost:3000/personal/personal',
        {
            method:'GET'  
        }        
    )
}
