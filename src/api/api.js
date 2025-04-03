import axios from "axios";

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

export const API = {
    getTodo(){
       return instance.get('/todos?_limit=20')
    },
    postTodo(newItem){
       return instance.post('/todos', newItem)
    },
    patchTodo(id,newData){
       return instance.patch(`/todos/${id}`, newData)
    },
    deleteTodo(id){
        return instance.delete(`/todos/${id}`)
    }
}