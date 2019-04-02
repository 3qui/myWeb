import 'whatwg-fetch'

function request(url,option){
    return fetch(url,option)
}

// .then(function(response) {
    //     return response.json();
    // })
    // .then(function(myJson) {
    //     console.log(myJson);
    // });
export default request