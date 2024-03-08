import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ScoreState {
  current: number;
  best: number;
}

const localScore = localStorage.getItem("score");

const initialState: ScoreState = localScore
  ? JSON.parse(localScore)
  : {
      current: 0,
      best: 0,
    };

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    addCurrentScore: (state, action: PayloadAction<number>) => {
      state.current += action.payload;
      localStorage.setItem("score", JSON.stringify(state));
    },
    setBestScore: (state, action: PayloadAction<number>) => {
      state.best = action.payload;
      localStorage.setItem("score", JSON.stringify(state));
    },
  },
});

export const { addCurrentScore, setBestScore } = scoreSlice.actions;

export default scoreSlice.reducer;
