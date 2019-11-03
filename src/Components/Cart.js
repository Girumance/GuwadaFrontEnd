import React from "react"
import icon from "../IMG/cartIcon.png"
import CartList from "./cartList"
import { connect } from "react-redux";
import { Paper } from "@material-ui/core";
class Cart extends React.Component{

    render(){
        return(
            <Paper>
            <div>
            <div className="row">
                <div className=" col-md-2">
                 <span className="fa fa-cart-arrow-down fa-lg fa-3x"></span>
                 </div>
                 <div className="col-md-9">
                    <p className="h3">My Cart</p>
                    </div>
                    
                </div>

<div className="cartArea ">

    <table>
     <tbody>
                {

                    this.props.mealorder.map( (meal,index) => <tr key={index}><td><CartList meal={meal}/></td></tr> )
                }


</tbody>
        
    </table>

</div>

</div>
</Paper>

        );
    }

}

const mapStateToProps = (state) =>{

return {
    mealorder:state.mealorder
}

}

export default connect(mapStateToProps) (Cart)