import React from 'react';
import Navigation from "./Components/Navigation"
import './style.css';
//import "./bootstrap.min.css"
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
//import "./bootstrap.min.js"
import Footer from './Components/Footer';
import Home from "./Components/Home"
import { BrowserRouter,Route} from 'react-router-dom/cjs/react-router-dom.min';
import KitchenWrapper from './Components/KitchenWrapper';
import Restaurants from './Components/Restaurants';
import Kitchen from './Components/Kitchen';
import KitchenDetails from './Components/KitchenDetails';
import Dashboard from "./Components/Dashboard"
import "font-awesome/css/font-awesome.css"


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
       <BrowserRouter>
      <Navigation/>
      <div className="Navi"></div>
     <switch>
      <Route path="/" component={Home} exact/>
      <Route path="/Resturants" component={Restaurants} exact />
      <Route path="/Kitechen/:id" component={KitchenDetails} exact/>
      <Route path="/dashboard" component={Dashboard}/>
      </switch>
      </BrowserRouter>
      <Footer/>
      

    </div>
  );
}

export default App;
