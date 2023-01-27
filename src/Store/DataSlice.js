import { createSlice } from "@reduxjs/toolkit";



const initialvalue = { data: []};

const DataSlice = createSlice({
  name: "data",
  initialState: initialvalue,
  reducers: {
    addData(state, action) {
      const newArray = [...state.data, action.payload];
      state.data = newArray;
      localStorage.setItem('items',JSON.stringify(newArray))
    },
    refreshData(state){
        const newArray = JSON.parse(localStorage.getItem('items'))
        state.data = newArray
    },
      edit(state,action) {
         state.data = action.payload;
      },
      logoutdata(state){
            state.data = []
      }
  },
});

export const dataManipulate = DataSlice.actions;

export default DataSlice;
