import React, { useState, useEffect } from 'react';

const TimetableDetails = () => {
  const [timetableData, setTimetableData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost/railwaypit/index.php');
      const data = await response.json();
      setTimetableData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const renderTimetableData = () => {
    if (timetableData) {
      return (
        <ul className="custom-list">
          {/* Render each item of timetableData */}
          {timetableData.map((row, index) => (
            <li key={index} className="list-item">

              <div className="dataContainer container grid">

                <div className="trainnumber">
                  <div className="item-label">Train Number: </div>
                  <div className="item-value">{row.train_number}</div>
                </div>

                <div className="trainname ">
                  <div className="item-label">Train Name: </div>
                  <div className="item-value">{row.train_name}</div>
                </div>

                <div className="origin">
                  <div className="item-label">Origin: </div>
                  <div className="item-value">{row.origin}</div>
                </div>

                <div className="destination">
                  <div className="item-label">Destination: </div>
                  <div className="item-value">{row.destination}</div>
                </div>

                <div className="traindate">
                  <div className="item-label">Train Date: </div>
                  <div className="item-value">{row.train_date}</div>
                </div>

                <div className="AC">
                  <div className="item-label">AC Fare: </div>
                  <div className="item-value">{row.AC_fare}</div>
                </div>

                <div className="gen">
                  <div className="item-label">GEN Fare: </div>
                  <div className="item-value">{row.GEN_fare}</div>
                </div>

              </div>

              <button className='btn'>
                  <a href="/passenger">Continue</a>
                </button>
            </li>
          ))}
        </ul>
      );
    } else {
      return <div className="loading-message">Please Enter a Valid Date...</div>;
    }
  };

  return (
    <div id="timetable" className="timetable-container flex">
      {/* Render timetableData here */}
      {renderTimetableData()}
    </div>
  );
};

export default TimetableDetails;
