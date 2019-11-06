import React from "react"
import { Paper } from "@material-ui/core"
import { connect } from "react-redux";
import Axios from "axios";


class EditProfile extends React.Component{

    constructor(){
        super()

        this.state={
            image:null
        }
        this.onUpdate=this.onUpdate.bind(this);
        this.onFile=this.onFile.bind(this);
    }

    onFile(e){
        this.setState({
          image:e.target.files[0]
        })
        console.log(e.target.files[0])
    
      }

    onUpdate(){

        let data={
            id:this.props.account.id,
            firstName:this.refs.fname.value,
            lastName:this.refs.lname.value,
            email:this.refs.email.value,
            phoneNumber:this.refs.phone.value,
            blockNumber:this.refs.block.value,
            roomNumber:this.refs.room.value

        }

        Axios.post("http://127.0.0.1:1234/account/update",data).then( res =>{

            let data=res.data;

            let action={
                type:"ACTION_ADDACCOUNT",
                account:data
            }
    
            this.props.dispatcher(action)

        })


        this.onImageUpload()


    }

    onImageUpload(id){
        const formData=new FormData();
        formData.append("photo",this.state.image,this.state.image.name)
  
        let path="http://127.0.0.1:1234/image/upload/"+this.props.account.id;
        
        Axios.post(path,formData).then(res => {
  
        
        })
      }

    render(){
        return(

            <div className="containere-fluid edit">
                <Paper>
                        <h4>User Profile</h4>

                <div className="col-md-12">
                    <input ref="fname" defaultValue={this.props.account.firstName} className="form-control" placeholder="First Name" />
                </div>

                <div className="col-md-12">
                    <input ref="lname" defaultValue={this.props.account.lastName} className="form-control" placeholder="Last Name" />
                </div>

                <div className="col-md-12">
                    <input ref="email" defaultValue={this.props.account.email} className="form-control" placeholder="Email" />
                </div>

                <div className="col-md-12">
                    <input ref="phone" defaultValue={this.props.account.phoneNumber} className="form-control" placeholder="Phone Number" />
                </div>

                <div className="col-md-12">
                    <input ref="block" defaultValue={this.props.account.blockNumber} className="form-control" placeholder="Block No" />
                </div>

                <div className="col-md-12">
                    <input ref="room" defaultValue={this.props.account.roomNumber} className="form-control" placeholder="RoomNumber" />
                </div>
                
               

                <div className="col-md-12">
                    {//<div className="imageUpload"> Please drop your image Here </div>
                    }
                    <input onChange={this.onFile} type="file" className="form-control"/>
                </div>
                
                <div className="col-md-12">
                    <button onClick={this.onUpdate} className="btn btn-success">Update</button>
                </div>
            
                </Paper>
            
                </div>
            

            
        )
    }
}

const mapStateToProps = (state)=>{

        return{
            account:state.account
        }
}

const mapDispatcherToProps = (dispatch) =>{

    return {
        dispatcher: (action) =>{
            dispatch(action)
        }
    }

}

export default connect(mapStateToProps,mapDispatcherToProps) (EditProfile);