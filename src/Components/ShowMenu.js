import React from "react"
import image1 from "../IMG/logo1.png"
import image2 from "../IMG/logo2.jpg"
import image3 from "../IMG/logo3.jpg"



export default class ShowMenu extends React.Component{

    render(){
        return(
           

                    <div class="card">
                        <img class="card-img-top" src={image1} alt="Card image cap"/>

                        <div class="card-body">
                            <h5 class="card-title"><b>Title:</b>Burger</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h6><b>Type:</b>BreakFast</h6>
                            <h6><b>Price:</b>250 ETB</h6>

                        
                        <div className="card-fotter row">
                        <div className="col-md-6">
                        <a href="#" class="btn btn-block btn-warning">Edit</a>
                        </div>
                        
                        <div className="col-md-6">
                        <a href="#" class="btn btn-block btn-danger">Delete</a>
                        </div>
                        </div>
                        </div>
                        </div>

                  
        );

    }
}