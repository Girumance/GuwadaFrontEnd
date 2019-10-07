import React from "react"
import icon from "../IMG/cartIcon.png"
export default class Cart extends React.Component{

    render(){
        return(
            <div className="row">
                <div className=" col-md-3">
                 <img title="Add To Cart!" src={icon} className="img-fluid"/>
                 </div>
                 <div className="col-md-9">
                    <p className="h3">My Cart</p>
                    </div>
                    <hr />
                </div>

        

        );
    }

}