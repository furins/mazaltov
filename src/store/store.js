import { configureStore } from '@reduxjs/toolkit'
import headerColorReducer from './headerColorSlice'

export default configureStore({
    preloadedState: {
        headerColor: {
            value: 'light undefined',
        },
    },
    reducer: {
        headerColor: headerColorReducer,
    },
})