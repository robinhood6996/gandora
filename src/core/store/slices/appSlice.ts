import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface AppData {
}

const initialState = {
  userLogined : false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleUserLogin(state) {
      state.userLogined = !state.userLogined;
    }
  }
});

export const { toggleUserLogin } = appSlice.actions;

export default appSlice.reducer;

