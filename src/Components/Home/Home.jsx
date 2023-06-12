import React, {useEffect} from 'react'

// imported assets for home
import video from '../../assets/earth.mp4'
import myTrain from '../../assets/bettertrain.png'

// import my AOS
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  //useEffect Animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <div className='home flex container'>

      <div className='mainText'>
        <h1 data-aos='fade-up' data-aos-duration='2500' >Cum ride my train, you will surely enjoy my large train</h1>
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