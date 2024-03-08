import { configureStore } from "@reduxjs/toolkit";

import { darkMode as darkModeReducer, score as scoreReducer, tiles as tilesReducer } from "./reducers";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    score: scoreReducer,
    tiles: tilesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
