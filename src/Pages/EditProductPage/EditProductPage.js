import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { dataManipulate } from "../../Store/DataSlice";

// this compnonent is responsible to edit the products by getting data from item and prefill the form so that we do not have to write everything.


const EditProductPage = () => {
    //to get the data from the user using form
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");
  const [enteredImage, setEnteredImage] = useState("");

  //getting data using useLocation hook that we passed from list component using useNavigate
  const data = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
   
    //conditionally invoking the useEffect hook so that we can still enter the form without clicking on edit button.
  if (data.state !== null) {
    //whenever the user comes to the form page by clicking edit button this useEffect hook does its job by setting all the values in the form 
    useEffect(() => {
      setEnteredName(data.state.product.Name);
      setEnteredQuantity(data.state.product.Quantity);
      setEnteredPrice(data.state.product.Price);
      setEnteredDescription(data.state.product.Description);
      setEnteredImage(data.state.product.Image);
    },[]);  
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const productInfo = {
      Name: enteredName,
      Description: enteredDescription,
      Price: enteredPrice,
      Quantity: enteredQuantity,
      Image: enteredImage
    };
    //adding the edited object by removing the previouse object in the array and passing it to the redux store.
   const productArray = [...data.state.filteredArray,productInfo]
    dispatch(dataManipulate.edit(productArray))
    navigate("/home");
  };

  return (
    <>
      <div className="form-css">
        <div className="centeredText">
          <h1>Edit Product</h1>
        </div>
        <form onSubmit={submitHandler} className="product-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              value={enteredDescription}
              onChange={(e) => setEnteredDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              step="0.01"
              value={enteredPrice}
              onChange={(e) => setEnteredPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              value={enteredQuantity}
              onChange={(e) => setEnteredQuantity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="text"
              value={enteredImage}
              onChange={(e) => setEnteredImage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditProductPage;
