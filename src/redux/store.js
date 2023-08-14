import { configureStore, createSlice } from "@reduxjs/toolkit";
import sliced from "./saledSlice";



const saledItem = createSlice({
  name : 'saledItem',
  initialState : [
    {
      id : 0,
      title : 'onion1',
      sale:'30%',
      saleprice: 19500,
      price: 25600,
      
    },
  
   
     {
      id : 1,
      title : 'bread',
      sale:'43%',
      saleprice: 13500,
      price: 22600
    },
    {
      id : 2,
      title : 'stake',
      sale:'43%',
      saleprice: 13500,
      price: 22600
    },

    {
      id : 3,
      title : 'egg',
      sale:'27%',
      saleprice: 11500,
      price: 19600
    },

    {
      id : 4,
      title : 'milk',
      sale:'43%',
      saleprice: 13500,
      price: 22600
    },

    {
      id : 5,
      title : 'cup',
      sale:'43%',
      saleprice: 13500,
      price: 22600
    },



  ],
  reducers : {
    setSaled(state,action) {
      return action.payload;
    }
  }
})

export const {setSaled} = saledItem.actions;
export default configureStore({
  reducer: {
    saledItem: saledItem.reducer,
  },
}) ;