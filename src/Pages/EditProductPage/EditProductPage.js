import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { dataManipulate } from "../../Store/DataSlice";

const EditProductPage = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");
  const [enteredImage, setEnteredImage] = useState("");

  const data = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (data.state !== null) {
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
