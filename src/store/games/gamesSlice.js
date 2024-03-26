import { createSlice } from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        titleSearched: '' ,
        gamesSearched: [],
        gamesLoading: false,
        idActiveGame: null,
        activeGame: null,
        pages: 0,
        actualPage: 0,
    },
    reducers: {
        returnInitialState: ( state ) => {
            state.titleSearched = '' ;
            state.gamesSearched = [];
            state.gamesLoading = false;
            state.idActiveGame = null;
            state.activeGame = null;
            state.pages = 0 ;
            state.actualPage = 0 ;
        },

        setPages: (state, { payload }) =>{
            state.pages =  payload
        },

        setActualPage: (state, { payload }) =>{
            state.actualPage =  payload
        },

        setTitleSearched: (state, { payload } ) => {
            state.titleSearched = payload;
        },

        setGamesSearched: (state, { payload } ) => {
            state.gamesSearched= payload;
            state.gamesLoading = false;
        },
        setIdActiveGame: (state, { payload } ) => {
            state.idActiveGame= payload;
        },

        setActiveGame: (state, { payload } ) => {
            console.log(payload)
            state.activeGame = payload;
            state.gamesLoading = false;
        },

        isLoading: ( state ) => {
            state.gamesLoading = true;
        },

    }
});
// Action creators are generated for each case reducer function
export const { 
    returnInitialState, 
    setPages, 
    setActualPage,
    setTitleSearched, 
    setGamesSearched, 
    setIdActiveGame,
    setActiveGame, 
    isLoading 
} = gamesSlice.actions;