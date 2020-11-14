import { todoActions } from "../../actions"
import { store } from "../../store";
import { Todo } from "../../types/todos";
import { mockServiceCreator } from "../../utils/test"
import storeForTest from "../../utils/test/mockStoreMiddleware";

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

let todoResponse = {
  data: {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  }
}

let todosResponse = {
  data: todos
}

let mockError = {
    response: {
        data: {
            message: 'Error message'
        }
    }
}

let response: any = {
  data: 'success'
}

describe('Test for the todos actions', () => {
  
    beforeEach(() => {
        storeForTest.clearActions();
    })

    test("should create an action to login, wchich be success", async () => {
        await storeForTest
          .dispatch(
            todoActions.getAllTodos(mockServiceCreator(todosResponse))
          )
          .then(() =>
            expect(storeForTest.getActions()).toContainEqual(
              {
                type: "GET_ALL_TODOS_REQUEST"
              },
              { type: "GET_ALL_TODOS_SUCCESS", payload: todos }
            )
          );

         
      });

      test('should create an action to login, wchich be failure', async () => {
        await storeForTest
        .dispatch(
          todoActions.getAllTodos(mockServiceCreator(mockError, false))
        )
        .then(() =>
          expect(storeForTest.getActions()).toContainEqual(
            {
              type: "GET_ALL_TODOS_REQUEST"
            },
            { type: "GET_ALL_TODOS_FAILURE", error: mockError }
          )
        );
      })

      test('should create an action to delete a todo, which be success', async () => {
      
        await storeForTest
        .dispatch(
          todoActions.deleteTodo(12, mockServiceCreator(response))
        )
        .then(() =>
          expect(storeForTest.getActions()).toContainEqual(
            { type: 'DELETE_TODO_REQUEST', payload: 12 },
            { type: 'DELETE_TODO_SUCCESS', payload: 'success' }
          )
        );

      })

      test('should create an action to delete a todo, which be failure', async () => {
        
        await storeForTest
        .dispatch(
          todoActions.deleteTodo(12, mockServiceCreator(mockError, false))
        )
        .then(() =>
          expect(storeForTest.getActions()).toContainEqual(
            { type: 'DELETE_TODO_REQUEST', payload: 12 },
            { type: 'DELETE_TODO_FAILURE', error: 'Error message' }   
          )
        );

      })
      
      test('should create an action to create a new todo, which be success', async () => {

        await storeForTest
        .dispatch(
          todoActions.createTodo(todoResponse.data, mockServiceCreator(todoResponse))
        )
        .then(() =>
          expect(storeForTest.getActions()).toContainEqual(
            {"payload": {"completed": false
            , "id": 1, "title": "delectus aut autem", "userId": 1}
            , "type": "CREATE_TODO_REQUEST"}
            , {"type": "CREATE_TODO_SUCCESS"}
          )
        );
        
      })

      test('should create an action to cerate a new todo, which be failure', async () => {
        
        await storeForTest
        .dispatch(
          todoActions.createTodo(todoResponse.data, mockServiceCreator(mockError, false))
        )
        .then(() =>
          expect(storeForTest.getActions()).toContainEqual(
            {"payload": {"completed": false, "id": 1, "title": "delectus aut autem", "userId": 1}
            , "type": "CREATE_TODO_REQUEST"}
            , {"error": "Error message", "type": "CREATE_TODO_FAILURE"}
          )
        );

      })
      

})
