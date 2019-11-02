import React from "react"
import { Paper } from "@material-ui/core"


class EditProfile extends React.Component{

    render(){
        return(

            <div className="containere-fluid edit">
                <Paper>
                        <h4>User Profile</h4>

                <div className="col-md-12">
                    <input className="form-control" placeholder="First Name" />
                </div>

                <div className="col-md-12">
                    <input className="form-control" placeholder="Last Name" />
                </div>

                <div className="col-md-12">
                    <input className="form-control" placeholder="Email" />
                </div>

                <div className="col-md-12">
                    <input className="form-control" placeholder="Phone Number" />
                </div>

                <div className="col-md-12">
                    <input className="form-control" placeholder="Block No" />
                </div>

                <div className="col-md-12">
                    <input className="form-control" placeholder="RoomNumber" />
                </div>
                
               

                <div className="col-md-12">
                    <div className="imageUpload"> Please drop your image Here </div>
                </div>
                
                <div className="col-md-12">
                    <button className="btn btn-success">Update</button>
                </div>
            
                </Paper>
            
                </div>
            

            
        )
    }
}

export default EditProfile;