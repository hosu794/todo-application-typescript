import { todoConstants } from "../../constants";
import todoReducer from "../../reducers/todoReducer";
import { Todo } from "../../types/todos";

let todo: Todo = {
    "userId": 1,
    "id": 10,
    "title": "Some fun title",
    "completed": false
  }

let todos: Todo[] = 
[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    }
]


let todosAfterDelete: Todo[] = 
[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    }
]

let initialState = { todos: [] }

let initialStateAfterFetch = { todos: todos }

let initialStateAfterDelete = { todos: todosAfterDelete }

let error = new Error("Todo Error");

describe('Tests for the todoReducer', () => {

    describe('get All Todos', () => {

      test('should return initialState', () => {
        expect(todoReducer(undefined, {})).toEqual(initialState);
    })

    test('should handles requesting of fetch todos', () => {
        expect(todoReducer(initialState, { type: todoConstants.GET_ALL_TODOS_REQUEST }))
        .toEqual({
            ...initialState, loading: true
        })
    })

    test('should handles success of fetch todos', () => {
        expect(todoReducer(initialState, {type: todoConstants.GET_ALL_TODOS_SUCCESS, payload: todos}))
        .toEqual({
          ...initialState, todos: [todos], loading: false
        })
    })

    test('should handles error of fetch todos', () => {
      expect(todoReducer(initialState, { type: todoConstants.GET_ALL_TODOS_FAILURE, error: error}))
      .toEqual({
        ...initialState, error: error, loading: false
      })
    })
    })
    
    describe('delete todo', () => {

      test('should handles request of delete todo', () => {
          expect(todoReducer(initialStateAfterFetch, { type: todoConstants.DELETE_TODO_REQUEST, payload: 8}))
          .toEqual({
            todos: todosAfterDelete, deleting: true
          })
      })

      test('should handles success of delete todo', () => {
        expect(todoReducer(initialStateAfterDelete, { type: todoConstants.DELETE_TODO_SUCCESS }))
        .toEqual({
          todos: todosAfterDelete, deleting: false
        })
      })
      
      test('should handles failure of delete todo', () => {
        expect(todoReducer(initialState, { type: todoConstants.DELETE_TODO_FAILURE, error: error}))
        .toEqual({
          ...initialState, error: error, loading: false
        })
      })
      
    })

    describe('create new todo', () => {
      test('should handles request of create todo', () => {
        expect(todoReducer(initialState, { type: todoConstants.CREATE_TODO_REQUEST, payload: todo }))
        .toEqual({
          todos: [todo], creating: true
        })
      })

      test('should handles success of create todo', () => {
        expect(todoReducer(initialState, { type: todoConstants.CREATE_TODO_SUCCESS }))
        .toEqual({
         ...initialState, creating: false
        })
      })

      test('should handles failure of create todo', () => {
        expect(todoReducer(initialState, { type: todoConstants.CREATE_TODO_FAILURE, error: error }))
        .toEqual({
          ...initialState, error: error, loading: false
        })
      })
      
    })
    
})
