import { configureStore } from '@reduxjs/toolkit'
import { gamesSlice } from './games/gamesSlice'

export const store = configureStore({
    reducer:{
        games:gamesSlice.reducer,
    }
})
