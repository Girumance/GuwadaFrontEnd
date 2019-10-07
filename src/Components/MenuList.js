import React from "react"
import icon from "../IMG/cartIcon.png"
export default class MenuList extends React.Component{

    render(){
        return(
            <div className="container-fluid">
            <div  className="row">
                 <div className="col-md-8">
                        <h4>Babi's Mixed Grill</h4>
                        <h6>Chicken breast (120g), Fish (120g), Beef steak (120g), mashed potato, vegetable, French fries, house special sauce</h6>
                        </div>
                

                <div className="col-md-2">
                250.00 ETB
                </div>

                <div className="col-md-2">
                    <div className="cartIcon">
                     <img title="Add To Cart!" src={icon} className="img-fluid"/>
                </div>
                </div>
                </div>
            </div>
            
        );

    }
}