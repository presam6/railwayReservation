import React, { useEffect, useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RxCalendar } from 'react-icons/rx';
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

    window.location.href = '/timetable';
  };

  const cities = [
    "Cagayan de Oro City",
    "Malaybalay City",
    "Valencia City",
    "Quezon",
    "Lorega",
    "Buda",
    "Mintal",
    "Davao City",
  ];

  const arrivalCityOptions = cities
    .filter((city) => city !== departureStation)
    .map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ));

  const currentDate = new Date();
  const maxSelectableDate = new Date();
  maxSelectableDate.setDate(currentDate.getDate() + 6);

  return (
    <div id="search" className="search container section">
      <div className="sectionContainer grid">
        <div className="btns flex"></div>

        <form onSubmit={handleSearch}>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="searchInputs flex"
          >
            <div className={`singleInput flex ${selectedDate ? 'selected' : ''}`}>
              <div className="iconDiv">
                <HiOutlineLocationMarker className="icon" />
              </div>
              <div className="texts">
                <h4>Departure Station</h4>
                <select value={departureStation} onChange={handleDepartureChange}>
                  <option value="">-- Select Departure Station --</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={`singleInput flex ${selectedDate ? 'selected' : ''}`}>
              <div className="iconDiv">
                <HiOutlineLocationMarker className="icon" />
              </div>
              <div className="texts">
                <h4>Arrival Station</h4>
                <select value={arrivalStation} onChange={handleArrivalChange}>
                  <option value="">-- Select Arrival Station --</option>
                  {arrivalCityOptions}
                </select>
              </div>
            </div>

            <div className={`singleInput flex ${selectedDate ? 'selected' : ''}`}>
              <div className="iconDiv">
                <RxCalendar className="icon" />
              </div>
              <div className="texts">
                <h4>Book Date</h4>
                <input
                  type="date"
                  min={currentDate.toISOString().split('T')[0]}
                  max={maxSelectableDate.toISOString().split('T')[0]}
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btnBlock flex text-align:center">
              Search Train
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;