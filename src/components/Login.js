import React, { Component } from 'react';
import { fetchUsers } from '../apiCalls';
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
      fetchUsers().then(data => this.state.users = data)
  }
  
  handleSubmit(event){
    let foundUser = this.state.users.find(user => user.username === event.target.value)
    this.props.handleLogin(foundUser)
  }

  render () {
    return (
      <div className='login'>
        <div className='login__box'>
            <h2>Please Login</h2>
            <p>Username:</p>
          <input
            className='login__username'
            type='text'
            placeholder='Enter username'
            onChange={(event) => this.handleSubmit(event)}
            />
          <Link to='/'>
            <button className='login__submit-button'>SUBMIT</button>
          </Link>
        </div>
      </div>
    )
}
}
 

  


export default Login;
