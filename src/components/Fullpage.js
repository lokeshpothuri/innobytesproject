import React from 'react'
import Navbar from './Navbar'
import Mainpage from './Mainpage'
import Secpart from './Secpart'
import Rooms from './Rooms'
import Services from './Services'
import Small from './Small'
import Gallery from './Gallery'
import Contact from './Contact'
import Map from './Map'
import Bottom from './Bottom'

const Fullpage = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Mainpage />
      </div>
      <div id="about">
        <Secpart />
      </div>
      <div id="rooms">
        <Rooms />
      </div>
      <div id="services">
        <Services />
      </div>
      <Small />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Map />
      <Bottom />
    </div>
  )
}

export default Fullpage
