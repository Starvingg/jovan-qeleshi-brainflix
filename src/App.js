/// api_key: "77e0d206-dee2-4ac6-a718-50ed76a85a99"

import './app.scss'

import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import videoData from "./data/video-details.json"
import HomePage from './pages/HomePage/HomePage';

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />}/> 
      </Routes>


    </>
  );
}

export default App;
