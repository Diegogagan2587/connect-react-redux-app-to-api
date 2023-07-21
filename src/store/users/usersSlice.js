import {  createSlice } from '@reduxjs/toolkit';

const initialState = {};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchFromAPI: ()=>{
            console.log('this should retrive the date form the API, this is a place holder')
        }
    }
})

export const { fetchFromAPI } = usersSlice.actions;
export default usersSlice.reducer;