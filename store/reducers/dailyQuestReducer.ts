import { createSlice } from "@reduxjs/toolkit";
import { Quest, Coordinate } from "../../constants/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Quest = {
  title: "",
  description: "",
  coordinate: { latitude: 0, longitude: 0 },
  reward: 0,
  expirationTimestamp: null,
};

const dailyQuestSlice = createSlice({
  name: "dailyQuest",
  initialState,
  reducers: {
    setQuest: (state, action: PayloadAction<Quest>) => {
      state = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setCoordinate: (state, action) => {
      state.coordinate = action.payload;
    },
    setReward: (state, action) => {
      state.coordinate = action.payload;
    },
    setExpirationDate: (state, action) => {
      state.expirationTimestamp += action.payload;
    },
  },
});

export default dailyQuestSlice;
