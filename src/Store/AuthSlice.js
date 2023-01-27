import { createSlice } from "@reduxjs/toolkit";

const initialValue = {authState:false, mail:'',name:''};

const AuthSlice = createSlice({
    name:"Auth",
    initialState:initialValue,
    reducers:{
        login(state,action){
           state.authState = true;
           state.mail = action.payload.mail;
           state.name = action.payload.name;
           console.log(state.mail,state.name)
           console.log(action.payload) 
           localStorage.setItem('mail',action.payload.mail);
           localStorage.setItem('name',action.payload.name);
           localStorage.setItem('loginState','true');
        },
        logout(state){
          state.authState = false;
          state.mail = '';
          state.name = '';
          localStorage.removeItem('mail')
          localStorage.removeItem('name')
          localStorage.removeItem('loginState')
        }
    }
})

export const auth = AuthSlice.actions;

export default AuthSlice;