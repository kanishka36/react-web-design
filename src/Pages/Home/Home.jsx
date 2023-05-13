import React from 'react'
import Header from '../../components/Header'
import SECTION_B from './SECTION_B'
import SECTION_A from './SECTION_A'
import SECTION_C from './SECTION_C'
import Footer from '../../components/Footer'
import './home.css'


function Home() {
  return (
    <>
      <Header/>
      <SECTION_A/>
      <SECTION_B/>
      <SECTION_C/>
      <Footer/>
    </>
  )
}

export default Home