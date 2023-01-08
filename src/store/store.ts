import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// Create a Redux store using the `configureStore` function from `@reduxjs/toolkit` and the root reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
