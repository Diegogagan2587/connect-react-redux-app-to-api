import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {} from '@reduxjs/toolkit';

const reduxAction = 'users/fetch';
const fetchUser = async () => {
  const urlAPI = 'https://randomuser.me/api/?results=5';
  //this can contain the functoin fetch
  console.log('this will fetch data promthe API');
  try {
    //code of block to try
    const request = await fetch(urlAPI);
    const response = await request.json();
    console.log('the Response for fetchUser would be ----->', response);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};
export const getUsers = createAsyncThunk(reduxAction, fetchUser);

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state) => {
      return (state.isLoading = false);
    });
    builder.addCase(getUsers.pending, (state) => {
      return (state.isLoading = true);
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Something went wrong';
    });
  },
});

export const { extraReducers } = usersSlice.actions;
export default usersSlice.reducer;
