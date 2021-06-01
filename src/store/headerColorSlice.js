import { createSlice } from '@reduxjs/toolkit'

export const headerColorSlice = createSlice({
    name: 'headerColor',
    initialState: {
        value: 'light',
    },
    reducers: {
        change: (state, color) => {
            state.value = color;
        },
    },
})

export const { change } = headerColorSlice.actions

export default headerColorSlice.reducer