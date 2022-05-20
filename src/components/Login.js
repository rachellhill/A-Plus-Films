import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = (props) => {
  let username = React.createRef();

  let updateUsername = () => {
    props.handleLogin(username.current.value)
  }

  return (
    <div className='login'>
      <h2>Please Login</h2>
      <p>Username</p>
      <input
        className='login__username'
        type='text'
        placeholder='Enter username'
        ref={username}
      />
      <p>Password</p>
      <input
        className='login__password'
        type='text'
        placeholder='Enter username'
      />
      <Link to='/'>
        <button className='nav__home-button' onClick={updateUsername}>SUBMIT</button>
      </Link>
    </div>
  )
}

export default Login;
