import React,{useEffect} from 'react'
// icons import
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RxCalendar} from 'react-icons/rx'

//import aos
import Aos from 'aos'
import 'aos/dist/aos.css'


const Search = () => {
  //useEffect Animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <div className='search container section'>
      <div className="sectionContainer grid">

        <div className="btns flex">

          {/* <div className="singleBtn">
            <span>General</span>
          </div>

          <div className="singleBtn">
            <span>AC</span>
          </div> */}
          
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="searchInputs flex">

            <div className="singleInput flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className='icon'/>
              </div>
              <div className='texts'>
                <h4>Departure Station</h4>
                <input type="text" placeholder='Enter Departure Station'/>
              </div>
            </div>

            <div className="singleInput flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className='icon'/>
              </div>
              <div className='texts'>
                <h4>Arrival Station</h4>
                <input type="text" placeholder='Enter Arrival Station'/>
              </div>
            </div>

            {/* <div className="singleInput flex">
              <div className="iconDiv">
                <RiAccountPinCircleLine className='icon'/>
              </div>
              <div className='texts'>
                <h4>Passengers</h4>
                <input type="text" placeholder='How many passengers'/>
              </div>
            </div> */}
          
            <div className="singleInput flex">
              <div className="iconDiv">
                <RxCalendar className='icon'/>
              </div>
              <div className='texts'>
                <h4>Book Date</h4>
                <input type="text" placeholder='Add Date'/>
              </div>
            </div>

            <button className='btn btnBlock flex text-align:center'>Search Train</button>
          </div>

      </div>
    </div>
  )
}

export default Search