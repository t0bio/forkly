import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Results from './components/Results';

function App() {
      return (
        <div class = "App">
            <Navbar />
            <div class = "center-page">
                <Searchbar />
            </div>
        </div>
    )
}

export default App;