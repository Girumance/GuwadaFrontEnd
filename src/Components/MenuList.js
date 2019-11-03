import React from "react"
import icon from "../IMG/cartIcon.png"
import {connect} from "react-redux"
import { Paper } from "@material-ui/core"


 class MenuList extends React.Component{

    constructor(){
            super()
            this.addToCart=this.addToCart.bind(this)
            this.state={
                icon:""
            }
    }


    addToCart(){

        if(this.props.isLoggedIn && this.props.account.role=="USER"){

        if(this.props.kitId===undefined){
            let action={
                   type:"ACTION_ADDKIT",
                   kitchenId:this.props.kid
               }
               
               this.props.addCart(action)

            
               
               
           }

        if(this.props.cusId==="none"){
         let action={
                type:"ACTION_ADDCUS",
                customerId:"1234"
            }
            
            this.props.addCart(action)

            
            
        }

            let mealDetails={
            title:this.props.menu.title,
            quantitiy:1
            }
           let meal={
            type:"ACTION_ADDMEAL",
            meal:mealDetails
           }

           this.props.addCart(meal);
        }
    }

    componentDidMount(){
        
    }

    render(){
        
        

        
    
        return(
            <Paper>
            <div className="container-fluid">
                
            <div  className="row">
                 <div className="col-md-8">
                        <h4>{this.props.menu.title}</h4>
                        <h6>{this.props.menu.description}</h6>
                        </div>
                

                <div className="col-md-2">
                {this.props.menu.price} ETB
                </div>

                <div className={this.props.isLoggedIn && this.props.account.role=="USER" ? "col-md-2 cartIcon" :"col-md-2 cartIconDis"} >
                    <div className="">
                     <span onClick={this.addToCart} className="fa  fa-cart-plus fa-lg fa-2x">   </span> 
                </div>
                </div>
                </div>

            </div>
            </Paper>
        );

    }
}

const mapStateToProps=(state) => {

return {
    cusId:state.customerId,
    kitId:state.kitchenId,
    meal:state.mealorder,
    isLoggedIn:state.isLoggedIn,
    account:state.account
}
}

const mapDispatchToProps= (dispatch) =>{

return {

    addCart:(action) => {dispatch(action)}
}

}



export default connect(mapStateToProps,mapDispatchToProps) (MenuList);