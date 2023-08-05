import { createSlice } from "@reduxjs/toolkit";
import { Quest, QuestList } from "../../constants/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: QuestList = {
  quests: [],
};

const nearbyQuestSlice = createSlice({
  name: "nearbyQuests",
  initialState,
  reducers: {
    replaceList: (state, action) => {
      state.quests = action.payload;
    },
    removeQuest: (state, action: PayloadAction<Quest>) => {
      const updatedQuests = state.quests.filter(
        (quest) => quest.title !== action.payload.title
      );
      state.quests = updatedQuests;
    },
    addQuest: (state, action: PayloadAction<Quest>) => {
      state.quests = [...state.quests, action.payload];
    },
  },
});

export default nearbyQuestSlice;
