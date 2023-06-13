import React, {useEffect} from 'react'

// import my AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribers = () => {
  //useEffect Animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="subscribe section">
      <div data-aos='fade-up' data-aos-duration='2500' className='sectionContainer container'>
        <h2>For Latest News and Updates Subscribe to Us</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder='Enter your Email Address' />
          <button className='btn'>Subscribe</button>
        </div>
      
      </div>
    </div>
  )
}

export default Subscribers