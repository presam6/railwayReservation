import React from 'react';

const BorderOne = () => {
  return (
    <div id='passenger' className="container-first container">
      <div className="another-container">
        <h2>Train Details</h2>
        <form>
          <div className="form-column">
            <label htmlFor="train-number">Train Number: 69</label>
          </div>

          <div className="form-column">
            <label htmlFor="train-name">Train Name: Star Rail</label>
          </div>

          <div className="form-column">
            <label htmlFor="source">Source: Cagayan de Oro</label>
          </div>

          <div className="form-column">
            <label htmlFor="destination">Destination: Davao</label>
          </div>

          <div className="form-column">
            <label htmlFor="train-date">Train Date: February 30, 2022</label>
          </div>

          <div className="form-column">
            <label htmlFor="category">Category: Aircon</label>
          </div>
        </form>
      </div>

      <div className="container-one container">
        <div className="container-two">
          <h2>Passenger Information</h2>
        </div>
        <div className="Main-one">
          <h4>Passenger</h4>
        </div>
        <div className="Main-two">
          <label htmlFor="name">Name as in passport</label>
          <input type="text" id="name" name="name" pattern="[A-Za-z\s]+" required />
        </div>

        <div className="Main-three">
          <label htmlFor="age">Age</label>
          <input type="text" id="age" name="age" pattern="[0-9]+" required />
        </div>
        <div className="Maine-four">
          <label htmlFor="gender">Sex</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="Maine-five">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="Main-button-con">
          <button>
            <a href="/">Continue</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorderOne;
