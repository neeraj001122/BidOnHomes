import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import LoginPage from "./Pages/LoginPage";
import { useSelector } from "react-redux";
import ProductForm from "./ProductForm/ProductForm";
import List from './List/List'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./Store/AuthSlice";
import { dataManipulate } from "./Store/DataSlice";
import EditProductPage from "./Pages/editProductPage/EditProductPage";

function App() {
  console.log(localStorage.getItem('items','name'))
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem('loginState') !== null)
    {
      dispatch(auth.login({name:localStorage.getItem('name'),mail:localStorage.getItem('mail')}))
    }
    if(localStorage.getItem('items') !== null)
    {
       dispatch(dataManipulate.refreshData())
    }  
  })
  const authState = useSelector((state) => state.auth.authState);


  return (
    <div>
      {authState && <Header />}
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<List />}></Route>
        <Route path="/add-product" element = {<ProductForm  />}></Route>
        <Route path="/edit-Product" element = {<EditProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
