import React from "react";
import icon from "../IMG/logo2.jpg"
export default class MenuModal extends React.Component{

    render(){
        return(
            <div className="MenuModal">

                <div className="closebtn text-center">
                    <h3>X</h3>
                </div>
                
            <div className="container solidbackground">
                <div className="col-md-12 text-center">
                <img src={icon} className="img-fluid img-rounded"/>
                <hr/>
                </div>

                <div className="row">
                    <div className="col-md-6 ">
                            <div className="text-center">
                        <h4><b>Menu Details</b></h4>
                        <hr/>
                             </div>

                        <h5><b>Title:</b>Burger</h5>
                        <h5><b>Description:</b>The best burger that you have never had.</h5>
                        <h5><b>Menu Type:</b>Break Fast</h5>
                        <h5><b>Size:</b>Normal</h5>
                        <h5><b>Quantity:</b>2</h5>
                        <h5><b>Additional Info:</b>Without paper</h5>
                        <h5><b>Price:</b>250 ETB</h5>

                    </div>

                    <div className="col-md-6 ">
                        <div className="text-center">
                    <h4><b>Address Details</b></h4>
                        <hr/>
                        </div>
                        <h5><b>Full Name:</b>Girum Kedese</h5>
                        <h5><b>Email:</b>girumkedese@gmail.com</h5>
                        <h5><b>Phone No:</b>+251921064879</h5>
                        <h5><b>Block:</b>22</h5>
                        <h5><b>Room No:</b>19</h5>
                        <h5><b>Status:</b><span className="bg-warning pending">Pending</span></h5>
                         
                    </div>

                </div>

                <div className="row text-right">
                    <div className="col-md-12">
                    <button className="btn btn-success ">Delivered</button>
                    </div>
                </div>
            </div>

            </div>
        );
    }
}