import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tiles } from "src/@types/Tiles";
import { initialiseTiles } from "src/helper/tiles";

export interface TilesState {
  value: Tiles;
}

const localTiles = localStorage.getItem("tiles");

const initialState: TilesState = localTiles
  ? JSON.parse(localTiles)
  : {
      value: initialiseTiles(),
    };

export const tilesSlice = createSlice({
  name: "tiles",
  initialState,
  reducers: {
    setTiles: (state, action: PayloadAction<Tiles>) => {
      state.value = action.payload;
      localStorage.setItem("tiles", JSON.stringify(state));
    },
  },
});

export const { setTiles } = tilesSlice.actions;

export default tilesSlice.reducer;
