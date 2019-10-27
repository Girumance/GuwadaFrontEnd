import React from "react"
import icon from "../IMG/cartIcon.png"
import CartList from "./cartList"
import { connect } from "react-redux";
class Cart extends React.Component{

    render(){
        return(
            <div>
            <div className="row">
                <div className=" col-md-2">
                 <span className="fa fa-cart-arrow-down fa-lg fa-3x"></span>
                 </div>
                 <div className="col-md-9">
                    <p className="h3">My Cart</p>
                    </div>
                    
                </div>

<div className="cartArea card">

    <table>
     <tbody>
                {

                    this.props.mealorder.map( (title,index) => <tr key={index}><td><CartList title={title}/></td></tr> )
                }


</tbody>
        
    </table>

</div>

</div>

        );
    }

}

const mapStateToProps = (state) =>{

return {
    mealorder:state.mealorder
}

}

export default connect(mapStateToProps) (Cart)