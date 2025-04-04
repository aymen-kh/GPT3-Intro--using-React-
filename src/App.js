import React from 'react';
import {Footer ,Blog ,Possibility ,Features, WhatGPT, Header} from './containers';
import { CTA , Brand ,NavBar } from './components';
import './App.css';
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <NavBar/>
        <Header/>
        </div>
        <Brand/>
        <WhatGPT/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
       

    </div>
  )
}

export default App