import { config } from 'process'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

export let store = mockStore({
    todos: {
        loading: false, 
        todos: []
    }
})

