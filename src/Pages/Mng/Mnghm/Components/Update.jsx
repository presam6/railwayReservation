import React from 'react'

const Update = () => {
    return (
        <div className="update section">
            <div className='sectionContainer container'>
                <h2>Enter Ticket ID</h2>
                <div className="inputDiv flex">
                    <input type="text" placeholder='Enter Ticket ID' />
                    <button className='btn'>Find ID</button>
                </div>

            </div>
        </div>
    )
}

export default Update