import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchFromAPI: () => {
      console.log(
        'this should retrive the date form the API, this is a place holder'
      );
    },
  },
});

export const { fetchFromAPI } = usersSlice.actions;
export default usersSlice.reducer;
