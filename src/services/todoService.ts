import {apiConstants} from '../constants/apiContants'
import axios, { AxiosResponse } from 'axios'
import { Todo, todoServiceInterface, TodoServiceTypes } from '../types/todos';

export const todoService: any = {
    getAllTodos, deleteTodo, createTodo
}

function getAllTodos(): TodoServiceTypes {
    return axios.get<Todo[]>(`${apiConstants}/todos`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

function deleteTodo(id: number): TodoServiceTypes {
    return axios.delete(`${apiConstants}/todos/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

function createTodo(request: Todo): TodoServiceTypes {

    let body = JSON.stringify(request)

    return axios.post(`${apiConstants}/todos`, body, {
        headers: {
            "Content-Type": "application/json"
        }
    }) 
}