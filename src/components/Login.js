import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

class Login extends Component {
  constructor (){
    super()
    this.state ={
      users: []
    }
  }
  
  componentDidMount () {
      fetch('http://localhost:3001/api/v1/users')
      .then(response => response.json())
      .then(data => this.state.users = data)
  }
  
  handleSubmit(event){
    let foundUser = this.state.users.find(user => user.username === event.target.value)
    this.props.handleLogin(foundUser)
    //use input to get user ^
    //foundUser passed in to App \/
    // this.props.handleLogin(foundUser)
  }

  render () {
    return (
      <div className='login'>
        <h2>Please Login</h2>
        <p>Username</p>
        <input
          className='login__username'
          type='text'
          placeholder='Enter username'
          onChange={(event) => this.handleSubmit(event)}
        />
        <p>Password</p>
        <input
          className='login__password'
          type='text'
          placeholder='Enter username'
        />
        <Link to='/'>
          <button className='nav__home-button'>SUBMIT</button>
        </Link>
      </div>
    )
}
}
 

  


export default Login;
