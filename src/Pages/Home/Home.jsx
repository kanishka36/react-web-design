import React from 'react'
import Footer from '../../components/Footer/Footer'
import LeftPane from '../../components/LeftPane/LeftPane'
import RightPane from '../../components/RightPane/RightPane'
import './home.css'

function Home() {
  return (
    <div className='home_container'>
      <div className="pane_container">
        <LeftPane/>
        <RightPane/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home