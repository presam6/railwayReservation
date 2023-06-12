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
          <p className='text'>Come visit our Social Media links!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <FaPinterestP className='icon'/>
          </div>
        </div>

        <div className="footerEnd">
          <p className="endMsg">MOS Railway Reservation - All Rights Reserved 2023</p>
        </div>
      </div>

    </div>
  )
}

export default Footer