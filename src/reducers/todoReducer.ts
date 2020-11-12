import { Container } from '@material-ui/core'
import {todoConstants as contants} from '../constants'
import { Todo } from '../types/todos'

 type initialStateTodos = {
    todos: Todo[]
}

type actionType = {
    type: string,
    payload?: any,
    error?: Error
}

export default function todoReducer(state: initialStateTodos = {todos: []}, action: actionType): any {
    switch (action.type) {
        case contants.GET_ALL_TODOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case contants.GET_ALL_TODOS_SUCCESS: 
            return {
                ...state, 
                loading: false, 
                todos: [...action.payload]
            }
        case contants.GET_ALL_TODOS_FAILURE: 
        case contants.DELETE_TODO_FAILURE:
        case contants.CREATE_TODO_FAILURE:
            return {
                ...state, 
                loading: false, 
                error: action.error
            }
        case contants.DELETE_TODO_REQUEST: 
            return {
                todos: state.todos.filter(item => item.id !== action.payload),
                deleting: true,
            }
        case contants.CREATE_TODO_REQUEST: 
            return {
                ...state, 
                todos: [...state.todos, action.payload],
                creating: true
            }
        case contants.CREATE_TODO_SUCCESS: 
            return {
                ...state, 
                creating: false
            }
        case contants.DELETE_TODO_SUCCESS: 
            return {
                ...state,
                deleting: false, 
            }
        default:
            return state
    }
}