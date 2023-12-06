import React from 'react';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import RecommendedSection from './Components/RecommendedSection';
import SearchPage from './Components/SearchPage';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './App.css';

function App() {


  return (
    <>
      <div id="main">

        <Router>
        <Header />
          <Routes>
            <Route path='/' 
              element={
                <div id="page">
                  <div id="sidebar"><Sidebar/></div>
                  <div id="recommended"><RecommendedSection/></div>
                </div>
              }
            />
            <Route path='/search/:searchTerm' element={
                <div id="page">
                  <div id="sidebar"><Sidebar/></div>
                  <div id="recommended"><SearchPage/></div>
                </div>
              } />
          </Routes>
        </Router>

        
        
      </div>
    </>
  );
}

export default App;
