import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignUp(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const req = { name, email, password, role };
    // const data = await axios.post('ec2-3-88-185-239.compute-1.amazonaws.com', req);

    const login = await axios
      // .post('http://ec2-3-88-185-239.compute-1.amazonaws.com:5001/api/v1/auth/register', req, {
      //   headers: { 'Content-Type': 'application/json' },
      // })
      .post('http://localhost:5001/api/v1/auth/register', req, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((e) => console.log(e))
      .catch((e) => console.log(e.response.data));

    // window.localStorage.auth = login.data.token;
    // console.log(window.localStorage.auth);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className='mb-3'>
        <label>Full name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          className='form-control'
          placeholder='First name'
        />
      </div>

      <div className='mb-3'>
        <label>Email address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          className='form-control'
          placeholder='Enter email'
        />
      </div>
      <div className='mb-3'>
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          className='form-control'
          placeholder='Enter password'
        />
      </div>
      <div className='mb-3'>
        <label>Role</label>
        <input
          onChange={(e) => setRole(e.target.value)}
          type='text'
          className='form-control'
          placeholder='User or Publisher?'
        />
      </div>
      <div className='d-grid'>
        <button type='submit' onSubmit={handleSubmit} className='btn btn-primary'>
          Sign Up
        </button>
      </div>
      <p className='forgot-password text-right'>
        Already registered <a href='/login'>sign in?</a>
      </p>
    </form>
  );
}
