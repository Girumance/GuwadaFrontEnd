import React from "react"
import image1 from "../IMG/cart.png"
import image2 from "../IMG/location.png"
import image3 from "../IMG/option.png"
export default class Services extends React.Component{

render(){
    return(
<div>
        <div className="Service container-fluid">
        <div className="sshadow container-fluid">
            </div>


            <div className="Sdesc container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                
                <img   className="img-fluid img-size" src={image2}/>
                
                    
                   <h2> Select a restaurant </h2>
        <h4>Once you login and set your location, you'll be able to see all the restaurants around you within your delivery range. Pick a restaurant from the map to see their opening hours, learn more, and see their menu.</h4>
                    
                </div>

                <div className="col-md-4">
                    
                
                        <img   className="img-fluid img-size" src={image3}/>
               
                       <h2> Browse their menu </h2>
<h4>Once you've selected the restaurant you'd like to order from, take a look at their menu to figure out what you'd like to eat. Place your choices in your basket, tell us how many you'd like to order, and place your order!?</h4>
               
                

                </div>

                <div className="col-md-4">
               
                <img   className="img-fluid img-size" src={image1}/>
                
                <h2>Place your order</h2>
<h4>Once you have all your choices in your cart, click on "Place your order" and you'll receive an e-mail or SMS confirmation of your order. Sit back and relax and we'll work to get it delivered to your door in an hour or less*</h4>
                    
                </div>

            </div>



        </div>
        </div>
            

        </div>

        
</div>

    );}

}
