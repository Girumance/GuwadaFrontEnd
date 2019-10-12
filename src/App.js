import React from 'react';

import Navigation from "./Components/Navigation"
import './style.css';
import "./bootstrap.min.css"

import Poster from './Components/Poster';
import Footer from './Components/Footer';
import RatedResturants from './Components/RatedResturants';
import Services from './Components/Services';
import About from './Components/About';
import Restaurants from './Components/Restaurants';
import KitchenDetails from './Components/KitchenDetails';
import AddKitchen from './Components/AddKitchen';
import AddKMenu from './Components/AddMenu';
import showMenu from './Components/showMenu';

function App() {

  /**
   * 
   * <RatedResturants/>
      <Services/>
      <About/>
      
     <Poster/> 
      <AddKitchen/>
       <KitchenDetails/>
      <AddKMenu/>  
      
   */
  return (
    <div className="App">
      <Navigation/>
     
      <showMenu/>
      
      <Footer/>
      

    </div>
  );
}

export default App;
