import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Search from './Search/Search'
import Support from './Support/Support'
import Subscribers from './Subscribers/Subscribers'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search/>
      <Support />
      <Subscribers />
      <Footer />
    </div>
  )
}

export default App