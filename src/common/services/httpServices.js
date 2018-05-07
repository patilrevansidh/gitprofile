
const BASE_URL = 'https://api.github.com/'

//https://api.github.com/search/users?q={search-string}

const obj = {
    get(url,body) {
        return doHttCalls(url,'GET',body)
    }
}

function doHttCalls(url,method,body={},custHeader={}) {
    let NEW_URL = BASE_URL+url;
    let data;
    if(method=="GET"){       
        NEW_URL = NEW_URL+constructParams(body);
    }else {
        data = JSON.stringify(body);
    }
    const options = {
        method: method, // or 'PUT'od
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    const promise = new Promise((resolve, reject)=> {
        fetch(NEW_URL,options)
        .then(response=>response.json())
        .then(response=> resolve(response))
        .catch(error=>reject(error));
    });
    return promise;      
}
function constructParams(body) {
	let params = "?"
	 if(Object.keys(body)) {
            Object.keys(body).map((m)=>{
                params = `${params}${m}=${body[m]}`
            })
     }
	return params
}

export default obj;