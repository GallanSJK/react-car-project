import { configureStore } from "@reduxjs/toolkit";
import mobilReducer from "../pages/List/ListSlice";

export default configureStore({
  reducer:{
    mobil: mobilReducer
  }
})