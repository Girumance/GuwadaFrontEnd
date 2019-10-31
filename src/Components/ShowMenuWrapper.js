import React from "react"
import ShowMenu from "./ShowMenu"
import Axios from "axios";
import { connect } from "react-redux";

class ShowMenuWrapper extends React.Component{
        constructor (){
                super();

                this.state={
                        menus:[]
                }
                
        }

        componentDidMount(){
                let path="http://localhost:1234/kitechen/getmenu/"+this.props.account.id;
                Axios.get(path).then( res =>{
                        
                        let action={
                        
                                type:"ACTION_MENUS",
                                menus:res.data
                        }

                        this.props.dispach(action)
                
                })    
        }

    render(){
        return(
            <div className="container">
                <h3>All your Menus</h3>
            <div className="row">
                
                {
                 this.props.menus.map( (menu,index) => <div key={index} className="col-md-4"> <ShowMenu  menu={menu}/>  </div>)
                }
                


                </div>
            </div>
        );
    }
}

const mapStateToProps= (state) => {

        return {
        menus:state.menus,
        account:state.account
        }
}

const mapDispacherToProps= (dispacher) =>{

      return {
        dispach: (action) =>{
                dispacher(action)
        }
}
}

export default connect(mapStateToProps,mapDispacherToProps) (ShowMenuWrapper)