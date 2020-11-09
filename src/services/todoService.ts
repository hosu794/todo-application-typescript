import {apiConstants} from '../constants/apiContants'

import axios, { AxiosResponse } from 'axios'
import { Todo } from '../types/todos';

export const todoService: any = {
    getAllTodos, deleteTodo
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