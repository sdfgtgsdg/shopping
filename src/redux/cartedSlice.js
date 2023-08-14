


const carted = createSlice({
  name: 'carted',
  initialState : [],
  reducers : {
    setCarted(state, action) {
      return action.payload;
    }
  }
})

export const {setCarted} = carted.actions;
export default carted;