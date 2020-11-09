import { Container } from '@material-ui/core'
import { todoConstants as constants} from '../../constants'

export type Todo = {
    userId: number, 
    id: number, 
    title: string,
    completed: boolean
}

export type todoServiceType = {
    getAllTodos: Function,
    deleteTodo: Function,
    createTodo: Function
}


export interface GetAllTodosRequestAction {
    type: typeof constants.GET_ALL_TODOS_REQUEST
}

export interface GetAllTodosSuccessAction {
    type: typeof constants.GET_ALL_TODOS_SUCCESS,
    payload: Todo[]
}

export interface GetAllTodosFailureAction {
    type: typeof constants.GET_ALL_TODOS_FAILURE,
    error: Error
}

export interface deleteTodoRequestAction {
    type: typeof constants.DELETE_TODO_REQUEST,
    payload: number
}

export interface deleteTodoSuccessAction {
    type: typeof constants.DELETE_TODO_SUCCESS,
    payload: any
}

export interface deleteTodoFailureAction {
    type: typeof constants.DELETE_TODO_FAILURE,
    error: Error
}

export interface createTodoRequestAction {
    type: typeof constants.CREATE_TODO_REQUEST,
    payload: Todo
}

export interface createTodoSuccessAction {
    type: typeof constants.CREATE_TODO_SUCCESS
}

export interface createTodoFailureAction {
    type: typeof constants.CREATE_TODO_FAILURE, error: Error
}

export type TodoActionTypes = GetAllTodosRequestAction | GetAllTodosSuccessAction 
| GetAllTodosFailureAction | deleteTodoRequestAction | deleteTodoSuccessAction |
 deleteTodoSuccessAction | deleteTodoFailureAction | createTodoRequestAction | 
 createTodoSuccessAction | createTodoFailureAction;

