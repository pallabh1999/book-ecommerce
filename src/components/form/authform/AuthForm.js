import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../../firebase/FireBase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthForm = ({ buttonName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //  the onsubmit default behaviou will be refresh the page our moto will will be to control that
    event.preventDefault();
    const auth = getAuth(app);
    // console.log(auth)

    if (buttonName === 'LogIn') {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/');
        })
        .catch((err) => console.log(err));

    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          userCredentials.user.displayName = username;
          // after the user has signed up we want our user to go back to the home page
          navigate('/');
        })
        .catch((err)=>{
          console.log(err);
      })

    }
    // console.log(username);
    // console.log(email);
    // console.log(password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*  so we are going to add a condition here if the button name is equal to sign in then only it will show user name not in case of login */}
      {buttonName === "Sign up" && (
        <div className='form-group'>
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter Your Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
      )}

      <div className='form-group'>
        <label>
          <b>Email</b>
        </label>
        <input
          type="email"
          className='form-input'
          placeholder='Enter Your Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <br></br>
      <div className="form-group">
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          className='form-input'
          placeholder='Enter Your Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <br></br>
      <div className='form-group'>
        <input type="submit" className='button-primary' value={buttonName} />
      </div>
    </form>
  );
};

export default AuthForm;
