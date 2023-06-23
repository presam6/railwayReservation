import React, { useEffect, useState } from 'react';

// import icons but gi comment sa karon
// import { HiOutlineLocationMarker } from 'react-icons/hi';
// import { RxCalendar } from 'react-icons/rx';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Search = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [departureStation, setDepartureStation] = useState('');
  const [arrivalStation, setArrivalStation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleDepartureChange = (event) => {
    setDepartureStation(event.target.value);

    if (arrivalStation === event.target.value) {
      setArrivalStation('');
    }
  };

  const handleArrivalChange = (event) => {
    setArrivalStation(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Departure Station:', departureStation);
    console.log('Arrival Station:', arrivalStation);
    console.log('Selected Date:', selectedDate);

    window.location.href = '/timetable'
  };

  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <div className="btns flex"></div>

        <div data-aos="fade-up" data-aos-duration="2500" className="searchInputs flex">
          <form action="action.php" method="post">
            <div className="form-group">
              <label htmlFor="origin">Source</label>
              <select name="origin" id="origin" value={departureStation} onChange={handleDepartureChange}>
                <option value="Cagayan de Oro">CDO</option>
                <option value="Davao">DAV</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <select name="destination" id="destination" value={arrivalStation} onChange={handleArrivalChange}>
                <option value="Cagayan de Oro">CDO</option>
                <option value="Davao">DAV</option>
                <option value="Valencia">VAL</option>
                <option value="Quezon">QUE</option>
                <option value="Lorega">LOR</option>
                <option value="Mintal">MIN</option>
                <option value="Buda">BUD</option>
                <option value="Malaybalay">MAL</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Book Date</label>
              <input type="text" className="form-control" id="date" name="date" value={selectedDate} onChange={handleDateChange} />
            </div>
            <input type="submit" className="btn btn-primary" onClick={handleSearch} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;