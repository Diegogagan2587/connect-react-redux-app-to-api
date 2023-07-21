import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {},//probably wi wil fetch data from here;
});

export const { fetchFromAPI, extraReducers } = usersSlice.actions;
export default usersSlice.reducer;
