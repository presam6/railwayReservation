import React from 'react'
import logo from './logo-starrail.png'
import { VscChevronRight } from 'react-icons/vsc'

const PassNav = () => {
    return (
        <div className='passnav flex'>
            <div className="logoDiv">
                <img src={logo} />
            </div>
            <div className="top-nav container">
                <li className='back flex'>
                    Home
                </li>
                <li className='timetable flex'><VscChevronRight /><a href="/timetable">Timetable</a></li>
                <li className='passenger flex'><VscChevronRight />Passenger</li>
                {/* <li className='exit flex'><VscChevronRight />Confirmation</li> */}
            </div>

            <div className="atb">
                <button>
                    <button type='button'>Go Back</button>
                </button>
            </div>

        </div>
    )
}

export default PassNav