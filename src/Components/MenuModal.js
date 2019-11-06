import React from "react";
import icon from "../IMG/logo2.jpg"
import { connect } from "react-redux";
import Axios from "axios";
import { Paper } from "@material-ui/core";
 class MenuModal extends React.Component{
        constructor(){
            super();
                this.state={
                    meal:[]
                }
            this.close=this.close.bind(this);
            this.onDelete=this.onDelete.bind(this);
            this.onDelivered=this.onDelivered.bind(this)
        }

        componentDidMount(){
            let path="http://127.0.0.1:1234/order/get/"+this.props.order.orderId;

            Axios.get(path).then( res => {

                this.setState({
                    meal:res.data
                })
            })
        }


        close(){
            
        let action={

            type:"ACTION_REMOVEMEALMODAL"
        }

        this.props.removeModal(action)
        
        }
        onDelivered(){
            let path="http://127.0.0.1:1234/order/delivered/"+this.props.order.orderId;
                
                    Axios.get(path).then( res => {

            })
            console.log("delivered")
        }
        

        onDelete(){

                let path="http://127.0.0.1:1234/order/delete/"+this.props.order.orderId;
                console.log("from on delete")
                    Axios.get(path).then( res => {

            })

        }

    render(){

           //console.log(this.state.meal.customerWrapper)
          
           /*
        
        */


        return(
            
            <div onClick={this.close} className="MenuModal">
              
                    <div className="container">
                   
                <div className="MenuModalData">
                <Paper>
                
            <div className="container solidbackground">
            
                <div className="col-md-12 text-center">
                <img src={icon} className="img-fluid img-rounded"/>
                <hr/>
                </div>

                <div className="row">
                    <div className="col-md-6 ">
                            <div className="text-center ">
                        <h4><b>Menu Details</b></h4>
                        <hr/>
                             </div>
                             <div className="overflow">
                                 <Paper>
                            {

                                this.state.meal.map( (state,index) => 
                            <div className="meal" key={index}>
                        <h5><b>Title:</b>{state.title}</h5>
                        <h5><b>Quantity:</b>{state.quantitiy}</h5>
                        
                        </div>
                            )}
                            </Paper>
                            </div>
                           </div> 
                    <div className="col-md-6 ">
                        <div className="text-center">
                    <h4><b>Address Details</b></h4>
                    </div>
                        <hr/>
                        
                        <h5><b>Full Name:</b>{this.props.order.customer.firstName}</h5>
                        <h5><b>Email:</b>{this.props.order.customer.email}</h5>
                        <h5><b>Phone No:</b>{this.props.order.customer.phoneNumber}</h5>
                        <h5><b>Block:</b>{this.props.order.customer.blockNumber}</h5>
                        <h5><b>Room No:</b>{this.props.order.customer.roomNumber}</h5>
                        <h5><b>Status:</b><span className="bg-warning pending">Pending</span></h5>
                        
                        
                        
                    </div>
            </div>
            <div className="row">
                    <div className="col-md-2">
                    <button onClick={this.onDelivered} className="btn btn-success  btn-block">Delivered</button>
                    </div>

                    <div className="col-md-2">
                    <button onClick={this.onDelete} className="btn btn-danger btn-block">Delete</button>
                    </div>
                </div>
              
            </div>
            </Paper>
            </div>
            
            </div>
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        modal:state.menuModal
    }
}


const mapDispatcherToProps = (dispatch) => {

    return {
        removeModal: (action) => {
                dispatch(action)
        } 
    }
}

export default connect(mapStateToProps,mapDispatcherToProps) (MenuModal)