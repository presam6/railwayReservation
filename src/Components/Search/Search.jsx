import React from 'react'
// icons import
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

const Search = () => {
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

        <div className="searchInputs flex">

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