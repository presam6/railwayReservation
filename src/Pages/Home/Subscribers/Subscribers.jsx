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
      <div className='sectionContainer container'>
        <h2>For Latest News and Updates Subscribe to Us</h2>
        <div data-aos='fade-left' data-aos-duration='1500' className="inputDiv flex">
          <input type="text" placeholder='Enter your Email Address' />
          <button data-aos='fade-left' data-aos-duration='1500' className='btn'>Subscribe</button>
        </div>
      
      </div>
    </div>
  )
}

export default Subscribers