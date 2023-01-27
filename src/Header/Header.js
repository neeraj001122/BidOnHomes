import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Store/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { dataManipulate } from '../Store/DataSlice';

//this component is responsible to render the navbar ui.

const Header = () => {
   const userName = useSelector((state) => state.auth.name);
   const navigate = useNavigate()
   const dispatch = useDispatch();

   const logoutHandler =() => {
       dispatch(auth.logout());
       dispatch(dataManipulate.logoutdata());
       navigate('/')
   };

    return (   
     <div className="header">
        <div className="headerLeft">
           <Link to="/home" style={{textDecoration:'none'}}><span>Home </span></Link>
           <Link to="add-product" style={{textDecoration:'none'}}><span>Add Prpduct </span></Link>
           <button className='lgt_btn' onClick={logoutHandler} >Logout</button>
           <h2 className='header-h2'>Welcome {userName}</h2>
        </div> 
     </div>
    )
};

export default Header;