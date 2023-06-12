import React from 'react'
import myLogo from '../../assets/logo-starrail.png'
import {TiSocialFacebook} from 'react-icons/ti'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={myLogo} className='Logo' />
          </div>
          <p className='text'>Come ride our train!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <FaPinterestP className='icon'/>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTittle">For more Info</span>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Seats</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
        </div>
      </div>

    </div>
  )
}

export default Footer