import React from 'react'
import logo from './logo-starrail.png'
import { VscChevronRight } from 'react-icons/vsc'
const TimeNav = () => {
  return (
    <div className='timenav flex'>
      <div className="logoDiv">
        <img src={logo} />
      </div>
      <div className="top-nav container">
        <li className='back flex'><a href="/">Home</a>
        </li>
        <li className='timetable flex'><VscChevronRight />Timetable</li>
        <li className='passenger flex'><VscChevronRight />Passenger</li>
        {/* <li className='exit flex'><VscChevronRight />Confirmation</li> */}
      </div>

      <div className="atb">
        <button>
          <a href="/">
            <button type="button">Go Back</button>
          </a>
        </button>

      </div>

    </div>
  )
}

export default TimeNav