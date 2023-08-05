import { createSlice } from "@reduxjs/toolkit";
import { Profile, Goal } from "../../constants/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Profile = {
  firstname: "Sierra",
  lastname: "Hadler",
  goals: [],
  quests: [],
  experience: 300,
  level: 1,
  //skillProgress: new Map(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
      state.level += 1;
    },
  },
});

export default userSlice;
