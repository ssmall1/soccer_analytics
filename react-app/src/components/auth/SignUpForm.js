import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { login } from "../../store/session";
import pitchImg from "../../resources/pitch.jpg";
import './Form.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("https://images.unsplash.com/photo-1614632537190-23e4146777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(firstName, lastName, email, password, imgUrl));
    }
  };

  const demoUser = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('bielsa@leeds.com', 'whatisgoingon'));
    if (data.errors) setErrors(data.errors);
  }

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateImgUrl = (e) => {
    setImgUrl(e.target.value);
  }

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className='auth-wrapper'>
      <div className='login-image-container'>
        <img alt='ocean pitch' id='form-image' src={pitchImg}></img>
      </div>

      <form className="auth-form-wrapper" onSubmit={onSignUp}>
        <div>
          <label>First Name</label>
          <input
            className="login-signup-input"
            type="text"
            name="first_name"
            onChange={updateFirstName}
            placeholder="First Name"
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            className="login-signup-input"
            type="text"
            name="last_name"
            onChange={updateLastName}
            value={lastName}
            placeholder="Last Name"
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            className="login-signup-input"
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            placeholder="Email"
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            className="login-signup-input"
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            placeholder="Password"
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            className="login-signup-input"
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            placeholder="Confirm password"
          ></input>
        </div>
        <div>
          <label>Profile Image</label>
          <input
            className="login-signup-input"
            type="text"
            name="image_url"
            onChange={updateImgUrl}
            value={imgUrl}
          ></input>
        </div>
        <div className='redirect-text'>Have an account?
            <a href="/sign-in" id="signin-link"> Sign In </a>
        </div>
        <div className="submit-wrapper">
          <button className='signup-signin-btn' type="submit">Sign Up</button>
          <button className='signup-signin-btn' type="submit" onClick={demoUser}>Demo User</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
