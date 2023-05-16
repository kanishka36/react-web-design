import React from 'react'
import Header from '../../components/Header'
import SECTION_A from '../Home/SECTION_A'
import SECTION_B from '../Home/SECTION_B'
import SECTION_C from '../Home/SECTION_C'
import Footer from '../../components/Footer'
import './home.css'


function Home() {
  return (
    <div className='home__container'>
      <Header/>
      <SECTION_A/>
      <SECTION_B/>
      <SECTION_C/>
      <Footer/>
    </div>
  )
}

export default Home