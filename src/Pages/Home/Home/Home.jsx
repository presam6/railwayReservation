import React, {useEffect} from 'react'

// imported assets for home
import video from '../Home/earth.mp4'
import myTrain from '../Home/bettertrain.png'

// import my AOS
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  //useEffect Animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <div id='home Home' className='home flex container'>

      <div className='mainText'>
        <h1 data-aos='fade-up' data-aos-duration='2500' >Mindanao: Star Rail | Fast, Convenient, and Affordable</h1>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={myTrain} className='train' />
      </div>
      
    </div>
  )
}

export default Home