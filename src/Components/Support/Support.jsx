import React from 'react'

// import for images
import myImage from '../../assets/for support.png'

const Support = () => {
  return (
    <div className='support container section'>
      <div className="sectionContainer">

        <div className="tittlesDiv">
          <small>Travel Support</small>
          <h2>Plan your ride with us!</h2>
          <p>Find help in your booking and travel plans, see what you can expect in your journey!</p>
        </div>

        <div className="infoDiv grid">

          <div className="textDiv grid">
            <div className="singleInfo">
              <span className='number'>01</span>
              <h4>Travel Cagayan de Oro to Davao and Vice Versa</h4>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit.</p>
            </div>

            <div className="singleInfo">
              <span className='number colorTwo'>02</span>
              <h4>Enjoy the ride with our AC Trains!</h4>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit.</p>
            </div>

            <div className="singleInfo">
              <span className='number colorOne'>03</span>
              <h4>Enjoy your ride by booking a General Train!</h4>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit.</p>
            </div>

          </div>

          <div className="imgDiv">
            <img src={myImage}  />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Support