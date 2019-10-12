import React from "react";
import image2 from "../IMG/logo2.jpg"
export default class showMenu extends React.Component{

    render(){
        return(
            <div className="card">
                        <img class="card-img-top" src={image2} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                        <a href="#" class="btn btn-success">Open</a>
         </div>
        );
    }
}