import React from "react"
import Order from "./Order"
import ShowMenu from "./ShowMenu"
import ShowMenuWrapper from "./ShowMenuWrapper"
import AddKMenu from "./AddMenu"
import DispalyCustomer from "./DispalyCustomer"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default class Dashboard extends React.Component{

render(){
    return(
        <div className="dashboard">
            <DispalyCustomer/>
    <div className="container">
            <div className="row">
                
                <div className="col-md-2">
                <div className="dashboard_menu">
                    <table className="table table-bordere">
                        <tr>
                            <th>Dashboard</th>
                    
                        </tr>
                        <tr>
                         <td><Link to="/addMenu">Add Menu</Link></td>   
                        </tr>

                        <tr>
                         <td><Link to="/showMenu">Show Menu</Link></td>   
                        </tr>

                        <tr>
                         <td>Pending Orders</td>   
                        </tr>


                        <tr>
                         <td>Delivered Orders</td>   
                        </tr>
                    </table>
                    </div>
                    </div>

                    <div className="col-md-10">

                    <Switch>
                        <Route path="/addMenu" component={AddKMenu} exact/>
                        <Route path="/" component={Order} exact/>
                        <Route path="/showMenu" component={ShowMenuWrapper} exact/>
                    
                    </Switch>
                            
                    

                    </div>
                    </div>

                    

            </div>

            
            </div>
    
    );
}

}