import { createSlice } from "@reduxjs/toolkit";
const midSlice = createSlice({
  name: "midList",
  initialState: {
    midList: [],
    characterAngle: 0,
    history: [],
  },
  reducers: {
    addEvent(state, action) {
      state.midList.push(action.payload);
    },
    emptyEventList(state) {
      state.midList = [];
    },
    rearrangeEvent(state, action) {
      const { source, destination } = action.payload;
      const [removed] = state.midList.splice(source.index, 1);
      state.midList.splice(destination.index, 0, removed);
    },
    changeAngle(state, action) {
      state.characterAngle = action.payload;
    },
    addInHistory(state, action) {
      state.history.push(action.payload);
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export const midActions = midSlice.actions;
export default midSlice;
