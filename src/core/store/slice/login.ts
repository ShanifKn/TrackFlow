import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  user: null,
  name: null,
  token: null,
  email: null,
  isUserAuthenticated: false,
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.id = action.payload.id;
      state.user = action.payload.user;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isUserAuthenticated = action.payload.isUserAuthenticated;
    },
    setLogout: (state) => {
      state.user = null;
      state.name = null;
      state.token = null;
      state.id = null;
      state.email = null;
      state.isUserAuthenticated = false;
    },
  },
});

export const { setLogin, setLogout } = userLoginSlice.actions;

export default userLoginSlice;
