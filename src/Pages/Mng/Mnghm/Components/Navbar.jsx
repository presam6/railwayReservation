import React, { useState } from 'react';
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import logo from './logo-starrail.png';

const Navbar = () => {
  const [active, setActive] = useState('navBarMenu');
  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  };

  const removeNavBar = () => {
    setActive('navBarMenu');
  };

  const [noBg, addBg] = useState('navBarTwo');
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg('navBarTwo navbarWBG');
    } else {
      addBg('navBarTwo');
    }
  };
  window.addEventListener('scroll', addBgColor);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            {' '}
            <BsPhoneVibrate className="icon" /> Support
          </li>
          <li className="flex">
            {' '}
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="Logo" onClick={handleLogoClick} />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              <Link to="/">Home</Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link to="/manageBooking">Manage Booking</Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              About Us
            </li>
          </ul>

          {/* <button onClick={removeNavBar} className="btn flex btnOne">
            Book Now!
          </button> */}
        </div>

        {/* <button className="btn flex btnTwo">
          <a href="#search">Book Now!</a>
        </button> */}

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;