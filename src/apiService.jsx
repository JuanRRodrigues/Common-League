import http from './http'

class ApiService{

    constructor(httpurl){
        this.httpurl = httpurl;
    }

    post(url, objeto){
        const requestUrl = `${this.httpurl}${url}`
        return http.post(requestUrl, objeto);
    }

    put(url, objeto){
        const requestUrl = `${this.httpurl}${url}`
        return http.put(requestUrl, objeto)
    }

    delete(url){
        const requestUrl = `${this.httpurl}${url}`
        return http.delete(requestUrl)
    }

    get(url){
        const requestUrl = `${this.httpurl}${url}`
        return http.delete(requestUrl)
    }
        
}

export default ApiService;
