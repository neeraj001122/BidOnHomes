import React from 'react';
import './List.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//this component is responsible for rendering the list int he ui.

const ProductList = () => {
  const [filterData, setFilterData] = useState('')
  const navigate = useNavigate();
  const data = useSelector((state) => state.data.data)
  const editHandler = (product) => {
      const filteredArray = data.filter(item => item.Name !== product.Name)
      //passing data through react router dom by useNavigate hook 
      navigate('/edit-product',{state:{product:product,filteredArray:filteredArray}})
  };
  return (
    //here we are maping through the items list while filtering them as per state of the search bar
    <>
    <input type='text' placeholder = 'search' onChange={(e) => setFilterData(e.target.value)} />
    <div className='center'>
    <h1>Product List</h1>
    </div>
    <div className="product-list-container">
      {data.map((product) => {
        {/*if our search bar is empty it will return all the items in the list*/}
        if(filterData === '')
        {
          return(
            <div key={Math.random()} className="product-card">
            <h3>{product.Name}</h3>
            <p>{product.Description}</p>
            <p>Price: {product.Price}</p>
            <p>Quantity: {product.Quantity}</p>
            <img src={product.Image} alt={product.Name} className="product-image" />
            <button onClick={editHandler.bind(this, product)}>Edit</button>
          </div>
          )
          {/*we are conditionaly rendering by mathcing the keywords of search bar to the keyword of our items by name,quantity and price.*/}
        } else if(product.Name.toLowerCase().includes(filterData.toLocaleLowerCase()) || product.Quantity.includes(filterData) || product.Price.includes(filterData))
        {
          return(
            <div key={Math.random()} className="product-card">
            <h3>{product.Name}</h3>
            <p>{product.Description}</p>
            <p>Price: {product.Price}</p>
            <p>Quantity: {product.Quantity}</p>
            <img src={product.Image} alt={product.Name} className="product-image" />
            <button onClick={editHandler.bind(this, product)}>Edit</button>
          </div>
          )
        }
       
})}
    </div>
    </>
  );
};

export default ProductList;