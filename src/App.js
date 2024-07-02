import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {originals,action } from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
      <>
   <NavBar/>
   <Banner/>
   <RowPost url={originals} title = 'Popular on Netflix'/>
   <RowPost url={action}title = 'Action' isSmall/>
   <RowPost url={action}title = 'Drama' isSmall/>
   <RowPost url={action}title = 'Comedy' isSmall/>
   </>
    </div>
   
  );
}

export default App;
