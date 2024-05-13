import { configureStore } from "@reduxjs/toolkit";
import themeTogglerReducer from "../features/ThemeSlice";

const store = configureStore({
  reducer: {
    themeToggler: themeTogglerReducer,
  },
});

export default store;
