import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react'
import Button from '@material-ui/core/Button';
import { ThemeContext } from '../src/components/Theme'
import TweetsSection from './components/TweetsSection';

import SideNav from './components/SideNav';
import { Paper } from '@material-ui/core';




function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext)
  return (
    <>
      <Paper>

        <div
          className="App-header"
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
          <SideNav dark={dark} toggle={toggle} />
          <div className='main-section' >
            <TweetsSection />
          </div>
        </div >
      </Paper>
    </ >
  )
}

export default App;
