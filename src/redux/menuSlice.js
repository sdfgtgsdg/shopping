import { configureStore, createSlice } from "@reduxjs/toolkit";
import sliced from "./saledSlice";



const menuItem = createSlice({
  name : 'menuItem',
  initialState : [
    {
      id : 0,
      title : 'menu1',
      name: '채소/과일',      
    },
  
    {
      id : 1,
      title : 'menu2',
      name: '계란/정육',      
    },
    
    {
      id : 2,
      title : 'menu3',
      name: '수산/건어물',      
    },

    {
      id : 3,
      title : 'menu4',
      name: '유제품',      
    },

    
    {
      id : 4,
      title : 'menu5',
      name: '냉장제품',      
    },

    {
      id : 5,
      title : 'menu6',
      name: '냉동제품',      
    },

    {
      id : 6,
      title : 'menu7',
      name: '김치/반찬',      
    },

    {
      id : 7,
      title : 'menu8',
      name: '곡류/견과',      
    },

    {
      id : 8,
      title : 'menu9',
      name: '유지/조미료',      
    },

    {
      id : 9,
      title : 'menu10',
      name: '공산품',      
    },

    
    {
      id : 10,
      title : 'menu11',
      name: '배달용품',      
    },

    
    {
      id : 11,
      title : 'menu12',
      name: '잡화용품',      
    },

  ],
  reducers : {
    setMenu(state,action) {
      return action.payload;
    }
  }
})

export const {setMenu} = menuItem.actions;
export default menuItem;


