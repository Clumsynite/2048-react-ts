import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface DarkModeState {
  current: number;
  best: number;
}

const localScore = localStorage.getItem("score");

const initialState: DarkModeState = localScore
  ? JSON.parse(localScore)
  : {
      current: 0,
      best: 0,
    };

export const darkModeSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    addCurrentScore: (state, action: PayloadAction<number>) => {
      state.current += action.payload;
      localStorage.setItem("score", JSON.stringify({ ...state, current: 0 }));
    },
    setBestScore: (state, action: PayloadAction<number>) => {
      state.best = action.payload;
      localStorage.setItem("score", JSON.stringify(state));
    },
  },
});

export const { addCurrentScore, setBestScore } = darkModeSlice.actions;

export default darkModeSlice.reducer;
