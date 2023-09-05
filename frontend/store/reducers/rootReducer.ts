import { combineReducers } from "redux";

import userSlice from "./userReducer";
import dailyQuestSlice from "./dailyQuestReducer";
import nearbyQuestSlice from "./nearbyQuestReducer";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authReducer";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  dailyQuest: dailyQuestSlice.reducer,
  nearbyQuests: nearbyQuestSlice.reducer,
});
