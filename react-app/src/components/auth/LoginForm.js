import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import forestPitch from "../../resources/forest-pitch.jpg";
import './Form.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const demoUser = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('bielsa@leeds.com', 'whatisgoingon'));
    if (data.errors) setErrors(data.errors);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className='auth-wrapper'>
      <div className='login-image-container'>
          <img alt='forest pitch' id='form-image' src={forestPitch}></img>
        </div>

      <form className="auth-form-wrapper" onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="login-signup-input"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="login-signup-input"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            required
          />
          <div className='redirect-text'>Don't Have an Account?
            <a href="/sign-up" id="signup-link"> Sign Up </a>
        </div>
        <div className="submit-wrapper">
          <button className='signup-signin-btn' type="submit">Login</button>
          <button className='signup-signin-btn' type="submit" onClick={demoUser}>Demo User</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
