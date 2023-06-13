import React from 'react'
import Navbar from './Pages/Home/Navbar/Navbar'
import Home from './Pages/Home/Home/Home'
import Search from './Pages/Home/Search/Search'
import Support from './Pages/Home/Support/Support'
import Subscribers from './Pages/Home/Subscribers/Subscribers'
import Footer from './Pages/Home/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Subscribers/>
      <Footer/>
    </div>
  )
}

export default App