import { createSlice } from "@reduxjs/toolkit";
import { Profile, Goal } from "../../constants/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Profile = {
  firstname: "Sierra",
  lastname: "Hadler",
  goals: [],
  quests: [],
  experience: 300,
  account_level: 1,
  //skillProgress: new Map(),
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.experience = action.payload.experience;
      state.account_level = action.payload.account_level;
    },
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
    addGoal: (state, action: PayloadAction<Goal>) => {
      state.goals = [...state.goals, action.payload];
    },
    removeGoal: (state, action: PayloadAction<Goal>) => {
      const updatedGoals = state.goals.filter(
        (goal) => goal.task !== action.payload.task
      );
      state.goals = updatedGoals;
    },
    addExperience: (state, action: PayloadAction<number>) => {
      state.experience += action.payload;
    },
    increaseLevel: (state) => {
      state.account_level += 1;
    },
  },
});

export default profileSlice;
