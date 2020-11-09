import { Container } from '@material-ui/core'
import {todoConstants as contants} from '../constants'
import { Todo } from '../types/todos'

 type initialStateTodos = {
    todos: Array<Todo>
}

export default function todoReducer(state: initialStateTodos = {todos: []}, action: any) {
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
            return {
                ...state, 
                loading: false, 
                error: action.error
            }
        case contants.DELETE_TODO_REQUEST: 
            return {
                ...state.todos.filter(item => item.id !== action.payload),
                deleting: true
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