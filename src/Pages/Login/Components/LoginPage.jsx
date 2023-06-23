import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import video from './earth.mp4'
import myTrain from './bettertrain copy.png'

const Alert = ({ message }) => {
  return (
    <div className="alert">
      <p>{message}</p>
    </div>
  );
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setShowAlert(false); // Clear the alert when a new password is typed
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the entered username and password
    if (username === 'admin123' && password === 'admin123') {
      // Redirect to the home page
      window.location.href = '/'; // Change the current URL to "/"
    } else {
      // Show "Invalid entry" message
      setShowAlert(true);
    }
  };

  return (
    <div id='loginPage' className='loginPage container flex'>
      <div className="mainText">
        <h2>Mindano: Star Rail</h2>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={myTrain} className='train' />
      </div>

      <h4>Admin Login</h4>
      <form onSubmit={handleSubmit}>
        <div className='user flex'>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
            placeholder="Username"
          />
        </div>
        <div className='pass flex'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Password"
          />
        </div>
        <div className='atb flex'>
          <button className='btn flex' type="submit">Login</button>
        </div>
      </form>

      {showAlert && <Alert message="Invalid Credentials" />}
    </div>
  );
};

export default LoginPage;