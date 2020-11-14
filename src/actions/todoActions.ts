import { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { todoConstants } from '../constants'
import { todoService } from '../services/todoService'
import { AxiosErrorResponse, Todo, TodoActionTypes } from '../types/todos';

export const todoActions = {getAllTodos, deleteTodo, createTodo}

function getAllTodos(service: any = todoService.getAllTodos) {
    return (dispatch: Dispatch<TodoActionTypes>) => {

        dispatch(request());

        return service().then(
            (response: AxiosResponse<Todo[]>) => {
                dispatch(success(response.data));
            },
            (error: AxiosErrorResponse) => {
               
                dispatch(failure(error.response.data.message));
               
            }
        )
}

    function request(): TodoActionTypes {
        return {type: todoConstants.GET_ALL_TODOS_REQUEST}
    }

    function success(payload: Array<any>): TodoActionTypes {
        return {type: todoConstants.GET_ALL_TODOS_SUCCESS, payload}
    }

    function failure(error: Error): TodoActionTypes {
        return {type: todoConstants.GET_ALL_TODOS_FAILURE, error}
    }

}

function deleteTodo(id: number, service = todoService.deleteTodo) {

    return (dispatch: Dispatch<TodoActionTypes>) => {
        dispatch(request(id))

        return service(id).then(
            (response: AxiosResponse<any>) => {
                
                dispatch(success(response.data));
            },
            (error: AxiosErrorResponse) => {
                dispatch(failure(error.response.data.message));
            }
        )
    }

    function request(id: number): TodoActionTypes {
        return {type: todoConstants.DELETE_TODO_REQUEST, payload: id}
    }

    function success(payload: any): TodoActionTypes {
        return {type: todoConstants.DELETE_TODO_SUCCESS, payload}
    }

    function failure(error: Error): TodoActionTypes {
        return {type: todoConstants.DELETE_TODO_FAILURE, error}
    }
}

function createTodo(todoRequest: Todo, service = todoService.createTodo) {

    return (dispatch: Dispatch<TodoActionTypes>) => {
        dispatch(request(todoRequest))

        return service(todoRequest).then(
            (response: AxiosResponse<any>) => {
                dispatch(success());
            },
            (error: AxiosErrorResponse) => {
                dispatch(failure(error.response.data.message));
            }
        )
    }

    function request(payload: Todo): TodoActionTypes {
        return {type: todoConstants.CREATE_TODO_REQUEST, payload}
    }

    function success(): TodoActionTypes {
        return {type: todoConstants.CREATE_TODO_SUCCESS}
    }

    function failure(error: Error): TodoActionTypes {
        return {type: todoConstants.CREATE_TODO_FAILURE, error}
    }
}