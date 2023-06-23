import React, { useState } from 'react';

const Whitespace = () => {
  const [ticketId, setTicketId] = useState('');
  const [name, setName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [passengerCount, setPassengerCount] = useState('');
  const [destination, setDestination] = useState('');
  const [arrivalStation, setArrivalStation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling logic here
    // Access the form data using the state variables
  };

  return (
    <div className='whitespace container flex'>
      <div className="sectionContainer flex">
        <form onSubmit={handleSubmit}>
          <div className='singleInput flex'>
            <div className='texts'>
              <h4>Ticket ID</h4>
            </div>
            <div className="inputDiv">
              <input placeholder='Enter'
                type="text"
                id="ticketId"
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
              />
            </div>
          </div>

          <div className='singleInput flex'>
            <div className='texts'>
              <h4>Name</h4>
            </div>
            <div className="inputDiv">
              <input placeholder='Enter'
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className='doubleInput flex'>
            <div className='singleInput flex'>
              <div className='texts'>
                <h4>Destination</h4>
              </div>
              <div className="inputDiv">
                <input placeholder='Enter'
                  type="text"
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>
            <div className='singleInput flex'>
              <div className='texts'>
                <h4>Arrival</h4>
              </div>
              <div className="inputDiv">
                <input placeholder='Enter'
                  type="text"
                  id="arrivalStation"
                  value={arrivalStation}
                  onChange={(e) => setArrivalStation(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className='singleInput flex'>
            <div className='texts'>
              <h4>Date</h4>
            </div>
            <div className="inputDiv">
              <input placeholder='Enter'
                type="text"
                id="bookingDate"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
              />
            </div>
          </div>

          <div className='singleInput flex'>
            <button className='btn flex' type="submit">Cancel</button>
          </div>
        </form>
      </div>
    </div>



  );
};

export default Whitespace;
