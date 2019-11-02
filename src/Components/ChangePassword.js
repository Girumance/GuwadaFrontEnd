import React from "react"
import { Paper } from "@material-ui/core"
import { connect } from "react-redux"
 class ChangePassword extends React.Component{


    constructor(props){
        super(props)

        this.onChangePress=this.onChangePress.bind(this)
    
    }

    onChangePress(){

        let current=this.refs.current.value;
        let newPass=this.refs.newPass.value;
        let confirm=this.refs.confirm.value;


        let data={
            ownerId:this.props.account.id,
            currentPassword:current,
            newPassword:newPass,
            confirmPass:confirm            
        }

        


    }


    render(){
        return(
            
                
                <div className="col-md-12">
                     <Paper>
                <div className="changePassword">

                        <h4>Change Password</h4>
                    <input className="form-control" type="password" placeholder="Current Password"  ref="current"/>
                    <input className="form-control" type="password" placeholder="New Password" ref="newPass"/>
                    <input className="form-control" type="password" placeholder="Confrim New Password" ref="confirm"/>

                    <button onClick={this.onChangePress} className="btn btn-success">Change</button>
                </div>
                     </Paper>
             </div>

            
        )
    }
}


const mapStateToProps = (state)=>{

    return {
        account:state.account
    }
}


export default connect(mapStateToProps)  (ChangePassword);
