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

        getData(){
            let pending="http://127.0.0.1:1234/order/pending/"+this.props.kitchenId;
            let onprocess="http://127.0.0.1:1234/order/onprocessorder/"+this.props.kitchenId;
            let delivered="http://127.0.0.1:1234/order/deliveredorder/"+this.props.kitchenId;

            let path="";
            if(this.props.type==="pending")
               path=pending;
            
            
            else if(this.props.type==="onprocess")
                path=onprocess;

            else if(this.props.type==="delivered")
                path=delivered;
               
            
            

            console.log("path:"+path)
           Axios.get(path).then( res => {

                let action={
                    type:"ACTION_ADDORDERS",
                    orders:res.data
                }

                this.props.addModal(action);
               this.setState({
                   orders:res.data
               })

           });
        }


         componentDidMount(){
            
              this.getData();
                 /* 
                setInterval(e=>{
                    this.getData()

                },10000)
             */
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
                        this.props.orders.map( (order,index)  =>  <DispalyCustomer order={order} key={index}/> )

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
        kitchenId:state.kitchenId,
        orders:state.orders
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