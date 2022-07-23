import React, { FormEventHandler, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface LoginProps {
  handleSubmit: void;
}

export default function Login(props: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const req = { email, password };
    setIsPending(true);
    // const data = await axios.post('ec2-3-88-185-239.compute-1.amazonaws.com', req);

    const login = await axios
      .post('http://localhost:5001/api/v1/auth/login', req, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((e) => {
        console.log(e);
        console.log('logged in');
        setIsPending(false);
        window.localStorage.auth = e.data.token;
        console.log(window.localStorage.auth);
        navigate(-1);
      });
    // login().then((e) => console.log(e));

    // window.localStorage.auth = login.data.token;
    // console.log(window.localStorage.auth);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>

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
        <div className='custom-control custom-checkbox'>
          <input type='checkbox' className='custom-control-input' id='customCheck1' />
          <label className='custom-control-label' htmlFor='customCheck1'>
            Remember me
          </label>
        </div>
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
      <p className='forgot-password text-right'>
        Forgot <a href='#'>password?</a>
      </p>
    </form>
  );
}
