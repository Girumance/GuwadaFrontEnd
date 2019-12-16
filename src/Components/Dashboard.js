import React from "react"
import Order from "./Order"
import ShowMenu from "./ShowMenu"
import ShowMenuWrapper from "./ShowMenuWrapper"
import AddKMenu from "./AddMenu"
import AddKitchen from "./AddKitchen"
import DispalyCustomer from "./DispalyCustomer"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import DashboardShow from "./DashboardShow"
import Axios from "axios"
import { connect } from "react-redux"
import { NavLink, HashRouter,withRouter } from "react-router-dom/cjs/react-router-dom"
import { Paper } from "@material-ui/core"
import AddMenu from "./AddMenu"
import Uuid from "uuid/v4"

 class Dashboard extends React.Component{

    constructor(){
        super()
        this.AddKMenu=this.AddKMenu.bind(this)
        this.ShowMenu=this.ShowMenu.bind(this)
        this.pendingOrder=this.pendingOrder.bind(this);
        this.AddKitchen=this.AddKitchen.bind(this)
        this.onProcessOrder=this.onProcessOrder.bind(this)
        this.onDeliveredOrder=this.onDeliveredOrder.bind(this)

       

        this.state={
            AddKitchen:true,
            addmenu:null,
            showmenu:null,
            pending:null,
            delivered:null,
            process:null,
            addkitchen:null,
        }
    }

    componentDidMount(){
        let path="http://127.0.0.1:1234/kitechen/isKitchen/"+this.props.account.id

        console.log("id"+this.props.account.id)
        Axios.get(path).then( res => {
            let action={
                type:"ACTION_ADDKIT",
                kitchenId:res.data
            }

            this.props.dispatch(action)

            this.setState({
                AddKitchen:res.data
            })


                
        })
    }
    AddKitchen(){
        let action={
            type:"ACTION_ADDCURRENTDISPLAY",
            currentDisplay:<AddKitchen/>
        }

        this.props.dispatch(action)

        this.setState({
            addmenu:null,
            showmenu:null,
            pending:null,
            delivered:null,
            process:null,
            addkitchen:"selected_menu",
        })

    }

    AddKMenu(){
        let action={
            type:"ACTION_ADDCURRENTDISPLAY",
            currentDisplay:<AddMenu/>
        }

        this.props.dispatch(action)
        this.setState({
            addmenu:"selected_menu",
            showmenu:null,
            pending:null,
            delivered:null,
            process:null,
            addkitchen:"",
        })
    }

    ShowMenu(){
        let action={
            type:"ACTION_ADDCURRENTDISPLAY",
            currentDisplay:<ShowMenuWrapper/>
        }

        this.props.dispatch(action)
        this.setState({
            addmenu:"",
            showmenu:"selected_menu",
            pending:null,
            delivered:null,
            process:null,
            addkitchen:"",
        })
    }

    pendingOrder(){
        let action={
            type:"ACTION_ADDCURRENTDISPLAY",
            currentDisplay: <Order key={Uuid()} type={"pending"}/>
        }
        this.props.dispatch(action)

        this.setState({
            addmenu:"",
            showmenu:"",
            pending:"selected_menu",
            delivered:null,
            process:null,
            addkitchen:"",
        })

    }

    
    onProcessOrder(){
        let action={
            type:"ACTION_ADDCURRENTDISPLAY",
            currentDisplay: <Order key={Uuid()} type={"onprocess"}/>
        }
        this.props.dispatch(action)
        this.setState({
            addmenu:"",
            showmenu:"",
            pending:"",
            delivered:null,
            process:"selected_menu",
            addkitchen:"",
        })
        
       
    }
    onDeliveredOrder(){
        let action={
            type:"ACTION_ADDCURRENTDISPLAY",
            currentDisplay:<Order key={Uuid()} type={"delivered"}/>
        }
        this.props.dispatch(action)

        this.props.dispatch(action)
        this.setState({
            addmenu:"",
            showmenu:"",
            pending:"",
            delivered:"selected_menu",
            process:"",
            addkitchen:"",
        })
          
    }

render(){

    if(!this.props.isLoggedIn)
    this.props.history.push("/")

    console.log(this.state.AddKitchen)
    return(
        <div className="dashboard">
            
    <div className="container">
            <div className="row">
                
                <div className="col-md-2">
                <div className="dashboard_menu">

                    <Paper>
                    <table className="table table-hover">
                        <tr>
                            <th>Dashboard</th>
                    
                        </tr>

                        {
                            this.state.AddKitchen==false ? <tr onClick={this.AddKitchen}><th>Add Kitchen</th> </tr>  :""
                        
                        }
                        <tr className={this.state.addmenu}>
                         <th onClick={this.AddKMenu}>  Add Menu  </th>   
                        </tr>

                        <tr className={this.state.showmenu}>
                         <th  onClick={this.ShowMenu}> Show Menu</th>   
                        </tr>

                        <tr className={this.state.pending}>
                         <th onClick={this.pendingOrder}>Pending Orders</th>   
                        </tr>

                        <tr className={this.state.process}>
                         <th onClick={this.onProcessOrder}>OnProcess Orders</th>   
                        </tr>


                        <tr className={this.state.delivered}>
                         <th onClick={this.onDeliveredOrder} >Delivered Orders</th>   
                        </tr>
                    </table>

                    </Paper>
                    </div>
                    </div>

                    <div className="col-md-10">

                   {
                       this.props.currentDisplay
                   } 

                    </div>
                    </div>

                    

            </div>

            
            </div>
    
    );
}

}
const mapStateToProps= (state) =>{
    return {
        account:state.account,
        isLoggedIn:state.isLoggedIn,
        currentDisplay:state.currentDisplay
    }
}

const mapDispacherToProps= (dispacher) =>{
    return{
        dispatch: (action) =>{
                dispacher(action)
        }
    }
}

export default connect(mapStateToProps,mapDispacherToProps) ( withRouter(Dashboard))