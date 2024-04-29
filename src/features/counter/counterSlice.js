import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):null
  },
  reducers: {
   
    elementSlice: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { elementSlice } = counterSlice.actions

export default counterSlice.reducer