import axios from "axios";

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

export const API = {
    getTodo(){
        instance.get('/todos?_limit=50')
    }
}