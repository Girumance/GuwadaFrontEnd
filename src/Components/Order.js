import React from "react"
import TableRow from "./TableRow"
import Axios from "axios";
import MenuModal from "./MenuModal"
import { connect } from "react-redux";
import DispalyCustomer from "./DispalyCustomer";

 class Order extends React.Component{
    constructor(){
        super()
        this.state={
            orders:[],
            modal:null
        }
        
        this.onClick=this.onClick.bind(this)

    }

         componentDidMount(){
            Axios.get("http://localhost:1234/order/kitchenorder/5da4dd989f083c428ca0d3e4").then( res => {
                this.setState({
                    orders:res.data
                })

            });
    }

    onClick(){
        
            
    }



    render(){
        return( 
            <div className="order">
                {this.props.modal}
                <div className="col-md-12">
                <div className="row">
                    {
                        this.state.orders.map( (order,index)  =>  <DispalyCustomer order={order} key={index}/> )

                    }
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
        addModal: (action) => {
                dispatch(action)
        } 
    }
}

export default connect(mapStateToProps,mapDispatcherToProps) (Order)