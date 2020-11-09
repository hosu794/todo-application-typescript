import { Dispatch } from 'react';
import { todoConstants } from '../constants'
import { todoService } from '../services/todoService'
import { Todo } from '../types/todos';

export const todoActions = {getAllTodos, deleteTodo, createTodo}

function getAllTodos(service: any = todoService.getAllTodos) {
    return (dispatch: Dispatch<any>) => {

        dispatch(request());

        return service().then(
            (response: any) => {
                dispatch(success(response.data));
            },
            (error: any) => {
               
                dispatch(failure(error.response.data.message));
               
            }
        )
}

    function request() {
        return {type: todoConstants.GET_ALL_TODOS_REQUEST}
    }

    function success(payload: Array<any>) {
        return {type: todoConstants.GET_ALL_TODOS_SUCCESS, payload}
    }

    function failure(error: Error) {
        return {type: todoConstants.GET_ALL_TODOS_FAILURE, error}
    }

}

function deleteTodo(id: number, service = todoService.deleteTodo) {

    return (dispatch: Dispatch<any>) => {
        dispatch(request(id))

        return service(id).then(
            (response: any) => {
                dispatch(success(response.data));
            },
            (error: any) => {
                dispatch(failure(error.response.data.message));
            }
        )
    }

    function request(id: number) {
        return {type: todoConstants.DELETE_TODO_REQUEST, payload: id}
    }

    function success(payload: any) {
        return {type: todoConstants.DELETE_TODO_SUCCESS, payload}
    }

    function failure(error: Error) {
        return {type: todoConstants.DELETE_TODO_FAILURE, error}
    }
}

function createTodo(todoRequest: Todo, service = todoService.createTodo) {

    return (dispatch: Dispatch<any>) => {
        dispatch(request(todoRequest))

        return service(todoRequest).then(
            (response: any) => {
                dispatch(success());
            },
            (error: any) => {
                dispatch(failure(error.response.data.message));
            }
        )
    }

    function request(payload: Todo) {
        return {type: todoConstants.CREATE_TODO_REQUEST, payload}
    }

    function success() {
        return {type: todoConstants.CREATE_TODO_SUCCESS}
    }

    function failure(error: Error) {
        return {type: todoConstants.CREATE_TODO_FAILURE, error}
    }
}