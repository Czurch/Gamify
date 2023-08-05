import { combineReducers } from "redux";

import userSlice from "./userReducer";
import dailyQuestSlice from "./dailyQuestReducer";
import nearbyQuestSlice from "./nearbyQuestReducer";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  dailyQuest: dailyQuestSlice.reducer,
  nearbyQuests: nearbyQuestSlice.reducer,
});
