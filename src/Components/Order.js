import React from "react"
import TableRow from "./TableRow"

export default class Order extends React.Component{
    render(){
        return( 
            <div className="order">
                <div className="col-md-12">
                <table className="table table-bordered">
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Additional Info</th>
                        <th>Date & Time</th>
                    </tr>

                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>

                </table>
                </div>

            </div>
        );
    }
}