import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/counterSlice'

export const createStore = (preloadedState) => {
    
    if (preloadedState) {
        return configureStore({
            reducer: {
                counter: counterReducer,
            },
            preloadedState
        })
    } else {
        return configureStore({
            reducer: {
                counter: counterReducer,
            }
        })
    }

}
