import React from "react"
import icon from "../IMG/Anon.png"

export default class DispalyCustomer extends React.Component{

    render(){
        return(
            <div className="discustomer">
            <div className="col-md-12">
                <div className="col-md-12">
                    <div className="profile-icon ">
                    <img className="img-fluid" src={icon}/>
                    </div>  
                    <hr/>                   
                </div>

                <div className="col-md-12">

                    <h6><b>Name:</b>Girum Kedese</h6>
                    <h6><b>Phone:</b>+251921064879</h6>
                    <h6><b>Email:</b>girumkedese@gmail.com</h6>
                    <div className="row">
                    <div className="col-md-6"><h6><b>Block:</b>21</h6></div><div className="col-md-6"><h6><b>Room No.:</b>27</h6></div>
                    </div>
                </div>
                
            
            </div>
            </div>
        );
    }
}