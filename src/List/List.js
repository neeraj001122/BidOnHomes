import React from 'react';
import './List.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
  const [filterData, setFilterData] = useState('')
  const navigate = useNavigate();
  const data = useSelector((state) => state.data.data)
  const editHandler = (product) => {
      const filteredArray = data.filter(item => item.Name !== product.Name)
      navigate('/edit-product',{state:{product:product,filteredArray:filteredArray}})
  };
  return (
    <>
    <input type='text' placeholder = 'search' onChange={(e) => setFilterData(e.target.value)} />
    <div className='center'>
    <h1>Product List</h1>
    </div>
    <div className="product-list-container">
      {data.map((product) => {
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