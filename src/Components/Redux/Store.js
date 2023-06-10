import { configureStore, createReducer } from "@reduxjs/toolkit";
import AllProductSlice from './Slices/AllProductSlices'
import ShoppingCartSlices from './Slices/ShoppingCartSlices'

export default configureStore({
  reducer: {
    AllProductSlice,
    ShoppingCartSlices
  },
});
