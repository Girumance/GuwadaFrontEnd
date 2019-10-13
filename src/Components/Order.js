import React from "react"

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
                        <th>Customer Name</th>
                        <th>Block</th>
                        <th> Room No. </th>
                        <th>Date & Time</th>
                        <th>Action</th>
                    </tr>
                </table>
                </div>

            </div>
        );
    }
}