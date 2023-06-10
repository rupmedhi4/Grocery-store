import { configureStore, createReducer } from "@reduxjs/toolkit";
import AllProductSlice from './Slices/AllProductSlices'
import ShoppingCartSlices from './Slices/ShoppingCartSlices'
import FirebaseSignupSlices from "./Slices/FirebaseSignupSlices";

export default configureStore({
  reducer: {
    AllProductSlice,
    ShoppingCartSlices,
    FirebaseSignupSlices
  },
});
