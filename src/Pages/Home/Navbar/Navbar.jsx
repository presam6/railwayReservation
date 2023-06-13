import React, {useState} from 'react'
// imported icons
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'

//imported imgs
import logo from '../Navbar/logo-starrail.png'

const Navbar = () => {
  // remove navbar in small width screens

  const [active, setActive] = useState('navBarMenu')
  const showNavBar = () => {
    setActive('navBarMenu showNavBar')
  }

  const removeNavBar = () => {
    setActive('navBarMenu')
  }

  //background color for second navbar
  const [noBg, addBg] = useState('navBarTwo')
  const addBgColor = () => {
    if(window.scrollY >= 10){
      addBg('navBarTwo navbarWBG')
    }else{
      addBg('navBarTwo')
    }
  }
  window.addEventListener('scroll', addBgColor)
  

  return (
    <div className='navBar flex'>

      <div className="navBarOne flex">
        <div>
        <SiConsul className='icon'/>
        </div>
        
        <div className='none flex'>
            <li className='flex'> <BsPhoneVibrate className='icon'/> Support</li>
            <li className='flex'> <AiOutlineGlobal className='icon'/> Languages</li>
        </div>
        
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>

      </div>

      <div className={noBg}>

        <div className="logoDiv">
          <img src={logo} className='Logo'/>
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">Home</li>
            <li onClick={removeNavBar} className="listItem">Manage Booking</li>
            <li onClick={removeNavBar} className="listItem">About Us</li>
          </ul>

          <button onClick={removeNavBar} className='btn flex btnOne'>
            Book Now!
          </button>

        </div>

        <button className='btn flex btnTwo'>
            Book Now!
          </button>

          <div onClick={showNavBar} onDoubleClick={removeNavBar} className='toggleIcon'>
          <CgMenuGridO className='icon'/>
          </div>

      </div>
    </div>
  )
}

export default Navbar