import React from 'react'
import './LoginPage.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../Store/AuthSlice';

//this component is responsible for authentication of user 
function LoginPage() {
  const dispatch = useDispatch()
    const navigate = useNavigate();
    const nameRef = useRef('');
    const mailRef = useRef('');

   const formHandler = (e) => {
    //takes input from the user and passing it to the redux store
        e.preventDefault() ;
      const name = nameRef.current.value;
      const mail = mailRef.current.value;
      dispatch(auth.login({name:name,mail:mail}))
      console.log(console.log(name,mail))
      navigate('/home')
    };

  return (
    <div className='form-container'>
    <form onSubmit={formHandler}>
      <label >Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        ref={nameRef}
      />
      <label >Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        ref={mailRef}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default LoginPage