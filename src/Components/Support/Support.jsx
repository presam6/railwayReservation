import React, {useEffect} from 'react'

// import for images
import myImage from '../../assets/for support.png'

// import my AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
  //useEffect Animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


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
            <div data-aos='fade-right' data-aos-duration='2500' className="singleInfo">
              <span className='number'>01</span>
              <h4>Travel Cagayan de Oro to Davao and Vice Versa</h4>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit.</p>
            </div>

            <div data-aos='fade-right' data-aos-duration='3500' className="singleInfo">
              <span className='number colorTwo'>02</span>
              <h4>Enjoy the ride with our AC Trains!</h4>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit.</p>
            </div>

            <div data-aos='fade-right' data-aos-duration='4500' className="singleInfo">
              <span className='number colorOne'>03</span>
              <h4>Enjoy your ride by booking a General Train!</h4>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit.</p>
            </div>

          </div>

          <div data-aos='fade-left' data-aos-duration='5500'className="imgDiv">
            <img src={myImage}  />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Support