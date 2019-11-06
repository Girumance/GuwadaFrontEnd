import React from "react"
import UserProfile from "./UserProfile"
import EditProfile from "./EditProfile"
import ChangePassword from "./ChangePassword"
import { Paper } from "@material-ui/core"
import { connect } from "react-redux"


class profile extends React.Component{

    render(){



        return (
        <div className="container-fluid profile">
                <Paper>
            <div className=" jumbotron profile-banner">
                
            </div>
            </Paper>
            <div className="container">

                <div className="row">
            <div className="col-md-2">
                <Paper>
                    <table className="table card">
                        <tbody>
                            <tr>
                                <td>Update Profile</td>
                            </tr>
                            <tr>
                                <td>Change Password</td>
                            </tr>

                            <tr>
                                <td>Pending orders</td>
                            </tr>

                            <tr>
                                <td>Delivered orders</td>
                            </tr>
                        </tbody>
                    </table>
                    </Paper> 
            </div>

            <div className="col-md-6">
                
            <EditProfile/>

            

            </div>


            <div className="col-md-3">
            <UserProfile/>

            </div>

            </div>
            </div>

        </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        account:state.account
    }

}

export default connect(mapStateToProps) (profile);