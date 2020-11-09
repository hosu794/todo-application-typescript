import {apiConstants} from '../constants/apiContants'

import axios, { AxiosResponse } from 'axios'
import { Todo, todoServiceType } from '../types/todos';


export const todoService: todoServiceType = {
    getAllTodos, deleteTodo, createTodo
}



function getAllTodos(): any {
    return axios.get<Todo[]>(`${apiConstants}/todos`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

function deleteTodo(id: number): any {
    return axios.delete(`${apiConstants}/todos/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

function createTodo(request: Todo): any {

    let body = JSON.stringify(request)

    return axios.post(`${apiConstants}/todos`, body, {
        headers: {
            "Content-Type": "application/json"
        }
    }) 
}