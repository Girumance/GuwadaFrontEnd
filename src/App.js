import React from 'react';
import Navigation from "./Components/Navigation"
import './style.css';
import "./bootstrap.min.css"


import Footer from './Components/Footer';
import Home from "./Components/Home"
import { BrowserRouter,Route} from 'react-router-dom/cjs/react-router-dom.min';
import KitchenWrapper from './Components/KitchenWrapper';
import Restaurants from './Components/Restaurants';
import Kitchen from './Components/Kitchen';
import KitchenDetails from './Components/KitchenDetails';
import Dashboard from "./Components/Dashboard"

function App() {

  /**
   * 
   *    
    <Poster/> 
      
     
      <AddKitchen/>
       <KitchenDetails/>
      <AddKMenu/>  
      <ShowMenuWrapper/>
      <Order/>
       <AddKMenu/>
   */
  return (
    <div className="App">
      <Navigation/>
      <BrowserRouter>
      <Route path="/" component={Home} exact/>
      <Route path="/Resturants" component={Restaurants} exact />
      <Route path="/Kitechen/:id" component={KitchenDetails} exact/>
      <Route path="/dashboard" component={Dashboard}/>
      </BrowserRouter>
      <Footer/>
      

    </div>
  );
}

export default App;
