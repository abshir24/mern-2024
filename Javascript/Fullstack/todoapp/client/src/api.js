import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8080"
})

export const testApi = () => api.get('/testapi')

export const getTodos = () => api.get('/gettodos')

export const addTodos = (todo) => api.post('/addtodos', todo)

