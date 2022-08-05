import './login.css';

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  async function loginUser(event) {
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:8282/users/login', {
        email,
        password,
      });

      if (response.data.user) {
        localStorage.setItem('token', response.data.user);
        navigate('/home');
      } else {
        setError('Please check your username and password.');
      }

      setEmail('');
      setPassword('');
    }catch {
      setError('Please check your username and password.');
    }
  }

  return (
    <div>

      <div className="logo-palendar">
        <span className="span">Palendar</span>
      </div>

      <div className="body">

        <div className="Login">

          <form onSubmit={loginUser}>

            <div className="input-container">
              <input
                className="input"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              />
            </div>

            <br />

            <div className="input-container">
              <input
                className="input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </div>

            <button className="login-button" data-cy="login" type="submit">Log In</button>
            {error && <div className="error">{error}</div>}
          </form>

          <div className="text-center-login">
            Dont have an account?
            {' '}
            <Link to="/signup">
              <u>Sign Up</u>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
