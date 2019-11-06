
import React from "react"
import image from "../IMG/food.jpg"
import {Paper} from "@material-ui/core"
import { connect } from "react-redux"


class UserProfile extends React.Component{


    render(){
        return(
            <Paper>
            <div className="container-fluid ">

                <div className="row">
                    <div className="col-md-12">
                        <img src={`http://localhost:1234/image/download/${this.props.account.id}`}  className="img-fluid profile-image"/>
                        <hr />
                    </div>

                    
                        <div className="col-md-12">
                            <h6><strong>First Name:</strong>{this.props.account.firstName}</h6>
                        </div>

                        <div className="col-md-12">
                            <h6><strong>Last Name:</strong>{this.props.account.lastName}</h6>
                        </div>

                        <div className="col-md-12">
                            <h6><strong>Email:</strong>{this.props.account.email}</h6>
                        </div>

                        <div className="col-md-12">
                            <h6><strong>Phone:</strong>{this.props.account.phoneNumber}</h6>
                        </div>

                        <div className="col-md-12">
                            <h6><strong>Block:</strong>{this.props.account.blockNumber}</h6>
                        </div>

                        <div className="col-md-12">
                            <h6><strong>Room:</strong>{this.props.account.roomNumber}</h6>
                        </div>
                        


                    

                </div>
                
            </div>
            </Paper>
        )
    }
}

const mapStateToProps =(state) =>{

    return{
        account:state.account
    }
}

export default connect(mapStateToProps) (UserProfile)