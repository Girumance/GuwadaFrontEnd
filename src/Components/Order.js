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
             let path="http://127.0.0.1:1234/order/kitchenorder/"+this.props.kitchenId;

             console.log("path:"+path)
            Axios.get(path).then( res => {
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
        modal:state.menuModal,
        kitchenId:state.kitchenId
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