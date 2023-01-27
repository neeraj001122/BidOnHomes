import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import DataSlice from "./DataSlice";


const store = configureStore({
    reducer:{auth:AuthSlice.reducer, data:DataSlice.reducer}
})

export default store;
