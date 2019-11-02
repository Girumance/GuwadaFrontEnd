import React from "react"
import image1 from "../IMG/logo1.png"
import image2 from "../IMG/logo2.jpg"
import image3 from "../IMG/logo3.jpg"
import { Paper } from "@material-ui/core";



export default class RatedResturants extends React.Component{

    render(){
        return(
            <div className="container ratedResuturant">

                <div className="row">
                    <div className="col-md-4 col-xs-4">
                <Paper>
                    <div class="card card-style">

                        
                        <img class="card-img-top" src={image1} alt="Card image cap"/>
                    


                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-xs-8">

                            </div>

                            <div className="col-md-4 col-xs-4">
                            <a href="#" class="btn  btn-warning">Open</a>
                            </div>

                        </div>
                        
                        </div>
                        </Paper>
                    </div>
                    

                    <div className="col-md-4 col-xs-4">
                        <Paper>
                             <div className="card card-style">
                        <img class="card-img-top img-fluid" src={image2} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-xs-8">

                            </div>

                            <div className="col-md-4 col-xs-4">
                            <a href="#" class="btn  btn-warning">Open</a>
                            </div>

                        </div>
                        </div>

                        </Paper>

                    </div>

                    <div className="col-md-4 col-xs-4">
                    <Paper>
                    <div className="card card-style">
                        <img class="card-img-top " src={image3} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-xs-8">

                            </div>

                            <div className="col-md-4 col-xs-4">
                            <a href="#" class="btn  btn-warning">Open</a>
                            </div>

                        </div>
                        </div>

                        </Paper>
                    </div>
                </div>

            </div>
        );

    }
}