import {createSlice} from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '',
  },
  reducers: {
    getToken: (state, action) => {
      console.log('token inside reducer', action.payload);
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {getToken} = tokenSlice.actions;

export default tokenSlice.reducer;
