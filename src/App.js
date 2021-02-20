import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react'
import { ThemeContext } from '../src/components/Theme'
import TweetsSection from './components/TweetsSection';
import twitter from '../src/Icons/twitter.svg'
import homeLight from '../src/Icons/home-light.svg'
import homeDark from '../src/Icons/home-dark.svg'
import hashtag from '../src/Icons/hash.svg'
import moon from '../src/Icons/moon.svg'
import sun from '../src/Icons/sun.svg'
import UserDark from '../src/Icons/user-dark-theme.svg'
import UserWhite from '../src/Icons/user-white-theme.svg'





function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext)
  return (
    <>

      <div
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
        <div className='nav-section'>
          <img className='twit-logo' src={twitter} alt="twitter-logo" />
          <div className='nav-container'>
            <div className='home'>
              <div className='logo-style'>
                <img src={!dark ? homeDark : homeLight} alt="home-logo" />
              </div>
              <div className='home-text'>
                <span> Home </span>
              </div>
            </div>
            <div className='home'>
              <div className='logo-style'>
                <img src={!dark ? hashtag : hashtag} alt="home-logo" />
              </div>
              <div className='home-text'>
              </div>
              <span> Explore </span>
            </div>
            <div className='home'>
              <div className='logo-style'>
                <img src={!dark ? UserWhite : UserDark} alt="home-logo" />
              </div>
              <div className='home-text'>
                <span> Profile </span>
              </div>
            </div>
            <div className='home'>
              <div className='logo-style'>
                <img
                  className='dark-mode-button'
                  type="button"
                  onClick={toggle}
                  src={!dark ? moon : sun}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <TweetsSection />
        </div>
      </div >
    </ >
  )
}

export default App;
