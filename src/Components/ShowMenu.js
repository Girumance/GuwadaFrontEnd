import React from "react"
import image1 from "../IMG/logo1.png"
import image2 from "../IMG/logo2.jpg"
import image3 from "../IMG/logo3.jpg"
import Axios from "axios"
import { connect } from "react-redux"



 class ShowMenu extends React.Component{

    constructor(){
        super()
        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(){
        let data={
            title:this.props.menu.title
        }

        let path="http://localhost:1234/kitechen/delete/"+this.props.account.id;
            Axios.post(path,data).then( res => {
                let newMenus=[]
                    if(res.data==1){
                        this.props.menus.map( element => {
                                if(!(element.title===this.props.menu.title))
                                newMenus.push(element)
                        })
                    }


                    let action={
                        type:"ACTION_MENUS",
                        menus:newMenus
                    }

                    this.props.dispatch(action)
            })

            
        }

    render(){
        return(
           

                    <div class="card">
                        <img class="card-img-top" src={image1} alt="Card image cap"/>

                        <div class="card-body">
                            <h5 class="card-title"><b>Title:</b>{this.props.menu.title}</h5>
                            <p class="card-text">{this.props.menu.description}</p>
                            <h6><b>Type:</b>{this.props.menu.menuType}</h6>
                            <h6><b>Price:</b>{this.props.menu.price}</h6>

                        
                        <div className="card-fotter row">
                        <div className="col-md-6">
                        <button class="btn btn-block btn-warning">Edit</button>
                        </div>
                        
                        <div className="col-md-6">
                        <button onClick={this.onDelete} class="btn btn-block btn-danger">Delete</button>
                        </div>
                        </div>
                        </div>
                        </div>

                  
        );

    }
}

const mapStateToProps= (state) =>{

    return {
        menus:state.menus,
        account:state.account
    }

}

const mapDispatcherToProps = (dispacher) =>{

    return {
        dispatch: (action) =>{
                dispacher(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatcherToProps) (ShowMenu)