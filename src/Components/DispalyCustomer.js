import React from "react"
import icon from "../IMG/Anon.png"
import MenuModal from "./MenuModal";
import { connect } from "react-redux";
import { Paper } from "@material-ui/core";

 class DispalyCustomer extends React.Component{

    constructor(){
        super();
        this.onClick=this.onClick.bind(this)
        this.state={
            modal:""
        }
    }

    onClick(){
        
        let action={
                type:"ACTION_ADDMEALMODAL",
                menuModal:<MenuModal order={this.props.order}/>
        }
        
        this.props.addModal(action)
        console.log("test")
    }

    onClose(){
        this.setState({
            modal:null
        })
        
        
    }

    render(){
        return(

           
            
            <div className="col-md-4">
                 <Paper>
                <div onClick={this.onClick} className="discustomer">
                <div className="col-md-12">
                    <div className="profile-icon ">
                    <img className="img-fluid" src={icon}/>
                    </div>  
                    <hr/>                   
                </div>

                <div className="col-md-12">
                    
                    <h6><b>Name:</b>{this.props.order.customer.firstName}</h6>
                    <h6><b>Phone:</b>{this.props.order.customer.phoneNumber}</h6>
                    <h6><b>Email:</b>{this.props.order.customer.email}</h6>
                    

                    <div className="row">
                    <div className="col-md-6"><h6><b>Block:</b>{this.props.order.customer.blockNumber}</h6></div><div className="col-md-6"><h6><b>Room No.:</b>{this.props.order.customer.roomNumber}</h6></div>
                    </div>
                </div>
                
            
            </div>
            </Paper>
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
        addModal: (action) => {
                dispatch(action)
        } 
    }
}

export default connect(mapStateToProps,mapDispatcherToProps) (DispalyCustomer)