import { useState } from "react";
import './LoginBright.css';

const LoginBright = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <label>Username</label>

        </div>
        <div className="user-box">
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  )
}

export default LoginBright;