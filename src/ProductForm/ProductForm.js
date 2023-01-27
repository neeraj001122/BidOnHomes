import React from "react";
import "./ProductForm.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { dataManipulate } from "../Store/DataSlice";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const productName = useRef('')
    const productDescription = useRef('') 
    const productPrice = useRef('')
    const productQunatity   = useRef('')
    const productImage = useRef('')


    const submitHandler = (e) => {
        e.preventDefault();
        const productInfo = {
            Name:productName.current.value,
            Description:productDescription.current.value,
            Price:productPrice.current.value,
            Quantity:productQunatity.current.value,
            Image:productImage.current.value
        }
        dispatch(dataManipulate.addData(productInfo))
        navigate('/home')
    }

  return (
    <>
    <div className="form-css">
        <div className="centeredText">
            <h1>Add Product</h1>
        </div>
    <form onSubmit={submitHandler} className="product-form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" ref={productName} required />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input type="text" ref={productDescription}/>
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="number" step="0.01" ref={productPrice} required />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input type="number" ref={productQunatity} required />
      </div>
      <div className="form-group">
        <label>Image</label>
        <input type="text" ref={productImage}/>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>  
    </>
  );
};

export default ProductForm;
