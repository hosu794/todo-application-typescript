import { Container } from '@material-ui/core'
import {todoConstants as contants} from '../constants'
import { Todo } from '../types/todos'

 type initialStateTodos = {
    todos: Array<any>
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
            return {
                ...state, 
                loading: false, 
                error: action.error
            }
        case contants.DELETE_TODO_REQUEST: 
        console.log("ID: " + action.payload)
            return {
                todos: state.todos.filter(item => item.id !== action.payload),
                deleting: true,
            }
        console.log(state.todos)
        case contants.DELETE_TODO_SUCCESS: 
            return {
                ...state,
                deleting: false, 
            }
        default:
            return state
    }
}