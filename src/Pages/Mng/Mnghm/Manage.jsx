import React from 'react'
import HomeM from './Components/HomeM'
import Update from './Components/Update'
import Footer from './Components/Footer'
import Whitespace from './Components/Whitespace'
import Navbar from './Components/Navbar'

const Manage = () => {
    return (
        <div>
            <Navbar/>
            <HomeM />
            <Update />
            <Whitespace/>
            <Footer />
        </div>
    )
}

export default Manage
