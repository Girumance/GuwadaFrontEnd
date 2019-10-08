import React from "react"
import icon from "../IMG/cartIcon.png"
import CartList from "./cartList"
export default class Cart extends React.Component{

    render(){
        return(
            <div>
            <div className="row">
                <div className=" col-md-3">
                 <img title="Add To Cart!" src={icon} className="img-fluid"/>
                 </div>
                 <div className="col-md-9">
                    <p className="h3">My Cart</p>
                    </div>
                    
                </div>

<div className="cartArea">

    <table>

        <tr>
            <td><CartList/></td>
        </tr>

    </table>

</div>

</div>

        );
    }

}