import { configureStore } from "@reduxjs/toolkit";
import mobilReducer from "./reducers/mobil/mobilSlice";

export default configureStore({
  reducer:{
    mobil: mobilReducer
  }
})