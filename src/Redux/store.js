import { configureStore } from '@reduxjs/toolkit';
import  CartReducer  from './cartReducer';
export const store = configureStore({
  reducer: {
    CartReducer
  }
})

