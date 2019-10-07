import React from "react"
import image from "../IMG/service.jpg"
import Menu from "./Menu"
import Cart from "./Cart"
export default class KitchenDetails extends React.Component{



    render(){
        return(
            <div className="container banner">
            
                <div className="row">
                    <div className="col-md-4 ">
                        <img className="img-fluid thumbnails" src={image}/>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Hotel</h2>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h3>Rating ****</h3>
                            </div>

                            <div className="col-md-8">
                                <h3><a className="btn btn-danger disabled">Closed</a> </h3>
                                    
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <h5> Mon – Fri 11:00 AM-3 PM</h5>
                            </div>
                            <div className="col-md-8">
                                <h4>Type:Bar</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Craving something delicious? Tired to cook something good? Want to impress your date with “YOUR” culinary skills? Which ever it is ….. We got your back and your tummy.</h5>
                            </div>

                        </div>

                        
                    </div>


                </div>
                <br />

                <div className="row">
                    <div className="col-md-2">
                        hfjkshfkjshkfkj

                    </div>

                    <div className="col-md-7">
                        <Menu/>
                    </div>

                    <div className="col-md-3">
                            <Cart/>
                    </div>

                </div>
            </div>





           
        );
    }
}