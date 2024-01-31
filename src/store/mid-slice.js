import { createSlice } from "@reduxjs/toolkit";
const midSlice = createSlice({
  name: "midList",
  initialState: {
    midList: [],
    character: [{ id: "sprite0", angle: 0 }],
    activeChar: "sprite0",
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

    addInHistory(state, action) {
      state.history.push(action.payload);
    },
    clearHistory(state) {
      state.history = [];
    },
    setActiceChar(state, action) {
      state.activeChar = action.payload;
    },
    addCharacter(state, action) {
      let num = state.character.length;
      state.character.push({ id: "sprite" + num, angle: 0 });
    },
    changeAngle(state, action) {
      state.character = state.character.map((x) => {
        if (x.id === state.activeChar) {
          return { ...x, angle: action.payload };
        }
        return x;
      });
    },
    reset(state) {
      if (state.character[0] !== 0) {
        let cat = document.getElementById("sprite0");
        cat.style.left = "0px";
        cat.style.top = "0px";
        cat.style.transform = `rotate(${0}deg)`;
      }
      state.character = [{ id: "sprite0", angle: 0 }];
      state.activeChar = "sprite0";
      state.history = [];
    },
  },
});

export const midActions = midSlice.actions;
export default midSlice;
