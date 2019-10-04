import React from "react"
import image1 from "../IMG/logo1.png"
import image2 from "../IMG/logo2.jpg"
import image3 from "../IMG/logo3.jpg"



export default class RatedResturants extends React.Component{

    render(){
        return(
            <div className="container ratedResuturant">

                <div className="row">
                    <div className="col-md-4">

                    <div class="card">
                        <img class="card-img-top" src={image1} alt="Card image cap"/>

                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                        <a href="#" class="btn btn-success">Open</a>
                        </div>

                    </div>
                    

                    <div className="col-md-4">

                    <div className="card">
                        <img class="card-img-top" src={image2} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                        <a href="#" class="btn btn-success">Open</a>
                        </div>


                    </div>

                    <div className="col-md-4">

                    <div className="card">
                        <img class="card-img-top" src={image3} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                        <a href="#" class="btn btn-success">Open</a>
                        </div>


                    </div>
                </div>

            </div>
        );

    }
}