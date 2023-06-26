import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/Home/App.jsx';
import Manage from './Pages/Mng/Mnghm/Manage.jsx';
import LoginPage from './Pages/Login/Components/LoginPage.jsx';
import TimeNav from './Pages/Timetable/Jian/Components/timeNav.jsx';
import TimetableDetails from './Pages/Timetable/Jian/Components/timetableDetails.jsx';
import BorderOne from './Pages/Passenger/Components/BorderOne.jsx';
import PassNav from './Pages/Passenger/Components/PassNav.jsx';
import ConNavbar from './Pages/Confirm/Components/conNavbar.jsx';
import ConfirmDetails from './Pages/Confirm/Components/confirmDetails.jsx';

// routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './Pages/Home/main.css';
import './Pages/Mng/Mnghm/manage.css';
import './Pages/Login/login.css';
import './Pages/Passenger/Components/passenger.css';
import './Pages/Timetable/Jian/Components/timetable.css';
import './Pages/Confirm/confirm.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/manageBooking',
    element: <Manage />,
  },
  {
    path: '/adminLogin',
    element: <LoginPage />,
  },
  {
    path: '/timetable',
    element: (
      <div>
        <TimeNav/>
        <TimetableDetails/>
      </div>
    ),
  },
  {
    path: '/passenger',
    element: (
      <div>
        <PassNav />
        <BorderOne />
      </div>
    ),
  },
  {
    path: '/confirm',
    element: (
      <div>
        <ConNavbar />
        <ConfirmDetails/>
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
