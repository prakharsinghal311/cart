import { configureStore } from "@reduxjs/toolkit";
import itemsreducer from "./items";

const store = configureStore({
  reducer: { items: itemsreducer },
});

export default store;
