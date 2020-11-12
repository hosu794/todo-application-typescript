import { Container } from '@material-ui/core'
import { AxiosResponse } from 'axios';
import { todoConstants as constants} from '../../constants'

export type Todo = {
    userId: number, 
    id: number, 
    title: string,
    completed: boolean
}

export interface todoServiceInterface  {

    getAllTodos():Promise<AxiosResponse<Todo[]>>;

    deleteTodo(id: number): Promise<AxiosResponse<any>>;

    createTodo(request: Todo): Promise<AxiosResponse<Todo>>;
}

export type GetAllTodosService = Promise<AxiosResponse<Todo[]>>;
export type DeleteTodoService = Promise<AxiosResponse<any>>;
export type CreateTodoService = Promise<AxiosResponse<Todo>>;

export type TodoServiceTypes = GetAllTodosService | DeleteTodoService | CreateTodoService;

export interface GetAllTodosRequestAction {
    type: typeof constants.GET_ALL_TODOS_REQUEST,
    payload?: any
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
    type: typeof constants.CREATE_TODO_SUCCESS,
    payload?: any
}

export interface createTodoFailureAction {
    type: typeof constants.CREATE_TODO_FAILURE, error: Error
}

export type TodoActionTypes = GetAllTodosRequestAction | GetAllTodosSuccessAction 
| GetAllTodosFailureAction | deleteTodoRequestAction | deleteTodoSuccessAction |
 deleteTodoSuccessAction | deleteTodoFailureAction | createTodoRequestAction | 
 createTodoSuccessAction | createTodoFailureAction;

 export interface AxiosErrorResponse extends AxiosResponse {
    response: { data: { message: Error }}
  }