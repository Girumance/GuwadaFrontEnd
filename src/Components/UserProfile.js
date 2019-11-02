
import React from "react"
import image from "../IMG/food.jpg"
import {Paper} from "@material-ui/core"


class UserProfile extends React.Component{


    render(){
        return(
            <Paper>
            <div className="container-fluid ">

                <div className="row">
                    <div className="col-md-12">
                        <img src={image}  className="img-fluid profile-image"/>
                        <hr />
                    </div>

                    
                        <div className="col-md-12">
                            <h6><strong>First Name:</strong>Girum</h6>
                        </div>

                        <div className="col-md-12">
                            <h6><strong>Last Name:</strong>Birhane</h6>
                        </div>

                        

                        <div className="col-md-12">
                            <h6><strong>Phone:</strong>+251921064879</h6>
                        </div>

                        <div className="col-md-12">
                            <h6><strong>Block:</strong>B-16</h6>
                        </div>

                        <div className="col-md-12">
                            <h6><strong>Room:</strong>R-12</h6>
                        </div>
                        


                    

                </div>
                
            </div>
            </Paper>
        )
    }
}

export default UserProfile