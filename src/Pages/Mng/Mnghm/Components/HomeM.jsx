import React from 'react'
import Navbar  from './Navbar'

const HomeM = () => {
  return (
    <div>
      <Navbar />

      <div id='home' className='home flex container'>

        <div className='mainText'>
          <h1>Mindanao: Star Rail | Manage Booking</h1>
        </div>

        {/* <div className="homeImages flex">

          <div className="videoDiv">
            <video src={video} autoPlay muted loop className='video'></video>
          </div>

          <img src={myTrain} className='train' />
        </div> */}

      </div>
    </div>
  )
}

export default HomeM