import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartValue: [],
  totalPrice: 0
}

export const CartReducer = createSlice({
  name: 'CartReducer',
  initialState,
  reducers: {
    cartIncrement: (state,action) => {
      state.cartValue.push(action.payload)
      const priceArray = state.cartValue.map(obj => obj.price)
      state.totalPrice= priceArray.reduce((a,b)=>a+b)

    },
    cartDecrement: (state,action) => {
      const index = state.cartValue.findIndex(obj => obj.mobile === action.payload.mobile)
      if(index >-1){
      state.cartValue.splice(index,1)
      }
      else{
        alert("this item is not avilable in cart")
      }
      const priceArray = state.cartValue.map(obj => obj.price)
      state.totalPrice= priceArray.reduce((a,b)=>a+b,0)
    }
  },
})

export const { cartIncrement , cartDecrement} = CartReducer.actions

export default CartReducer.reducer

