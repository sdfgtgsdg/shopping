import { configureStore, createSlice } from "@reduxjs/toolkit";



const recentItem = createSlice({
  name : 'recentItem',
  initialState : [
    {
      id : 0,
      title : 'garlic',
        
    },
  
    {
      id : 1,
      title : 'bowl',
         
    },
    
    {
      id : 2,
      title : 'box',
         
    },

    {
      id : 3,
      title : 'tomato',
         
    },

    {
      id : 4,
      title : 'cola',
         
    },

    {
      id : 5,
      title : 'pasta',
         
    },

    {
      id : 6,
      title : 'potato',
         
    },
  

  ],
  reducers : {
    setRecent(state,action) {
      return action.payload;
    }
  }
})

export const {setRecent} = recentItem.actions;
export default recentItem;



