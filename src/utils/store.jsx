import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './redux/cartSlice'
export const store = configureStore({
  reducer: {
   cart:CartReducer
  },
})