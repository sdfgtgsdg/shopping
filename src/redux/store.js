import { configureStore, createSlice } from "@reduxjs/toolkit";
import sliced from "./saledSlice";
import menuItem from "./menuSlice";
import recentItem from "./recentedSlice";




const saledItem = createSlice({
  name : 'saledItem',
  initialState : [
    {
      id : 0,
      title : 'onion1',
      name: '국내산 양파 1kg',
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

    {
      id : 6,
      title : 'broccoli2',
      name: '최상급 브로콜리 1kg',
      sale:'43%',
      saleprice: 15500,
      price: 22600
    },


    {
      id : 7,
      title : 'bro',
      name: '고당도 파프리카 2kg',
      sale:'43%',
      saleprice: 13500,
      price: 22600
    },


    {
      id : 8,
      title : 'carrot',
      name: '친환경 세척당근 1box',
      sale:'43%',
      saleprice: 13500,
      price: 22600
    },

    {
      id : 9,
      title : 'potato',
      name: '포슬포슬 햇감자 10kg',
      sale:'43%',
      saleprice: 28600,
      price: 38600
    },

    {
      id : 10,
      title : 'tomato',
      name: '스테비아 토마토 1kg',
      sale:'43%',
      saleprice: 18500,
      price: 23600
    },


    {
      id : 11,
      title : 'banana2',
      name: '돌 바나나 102kg',
      sale:'43%',
      saleprice: 18500,
      price: 23600
    },

    {
      id : 12,
      title : 'apple',
      name: 'GAP인증 초록 사과 2kg',
      sale:'43%',
      saleprice: 18500,
      price: 23600
    },

    {
      id : 13,
      title : 'lemon',
      name: '미국산 레몬 1봉, 1kg',
      sale:'43%',
      saleprice: 18500,
      price: 23600
    },

    {
      id : 14,
      title : 'straw',
      name: '프리미엄 생딸기 1kg',
      sale:'43%',
      saleprice: 18500,
      price: 23600
    },

    {
      id : 15,
      title : 'orange',
      name: '호주산 오렌지 2kg',
      sale:'43%',
      saleprice: 18500,
      price: 23600
    },

    {
      id : 16,
      title : 'berry',
      name: '국내산 무농약 베리 1kg',
      sale:'43%',
      saleprice: 18500,
      price: 23600
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
    menuItem: menuItem.reducer,
    recentItem: recentItem.reducer
  },
}) ;