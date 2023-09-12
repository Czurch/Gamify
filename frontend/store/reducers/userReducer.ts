import { createSlice } from "@reduxjs/toolkit";
import { Profile, Goal, User } from "../../constants/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  id: -1,
  email: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export default userSlice;
