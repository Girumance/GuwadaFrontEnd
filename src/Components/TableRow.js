import React from "react";
import MenuModal from "./MenuModal";
import { connect } from "react-redux";

 class TableRow extends React.Component{

    constructor(){
        super()
        this.onClick=this.onClick.bind(this)
        this.onClose=this.onClose.bind(this)
        this.state={
            modal:null,
            check:false
        }

        this.modal=null;
    }

    onClick(){
        console.log("iD:"+this.props.order.orderId)
         let action={
             type:"ACTION_ADDMEALMODAL",
             orderid:this.props.order.orderId
         }
         this.props.addModal(action)
    
    }

    onClose(){
    
        
        this.modal=null
    

    }


    render(){
        return(
            <React.Fragment>
           <td> {this.props.order.customer.firstName+" "+this.props.order.customer.lastName}</td>
           <td> {this.props.order.customer.email}</td>
           <td> {this.props.order.customer.phoneNumber}</td>
           <td> Block:{this.props.order.customer.blockNumber+"   "}Room:{this.props.order.customer.roomNumber}</td>
           <td> {this.props.order.dateTime}</td>
           </React.Fragment>
            
            

        );
    }
}

const mapStateToProps = (state) => {

    return {
        orderid:state.orderid
    }
}


const mapDispatcherToProps = (dispatch) => {

    return {
        addModal: (action) => {
                dispatch(action)
        } 
    }
}

export default connect(mapStateToProps,mapDispatcherToProps) (TableRow)