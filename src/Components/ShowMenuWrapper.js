import React from "react"
import ShowMenu from "./ShowMenu"
import Axios from "axios";

export default class ShowMenuWrapper extends React.Component{
        constructor (){
                super();

                this.setState={
                        menus:[]
                }
        }

        componentDidMount(){
                Axios.get().then( res =>{
                        
                        this.setState({
                                menus:res.data
                        })
                })
        }

    render(){
        return(
            <div className="container">
                <h3>All your Menus</h3>
            <div className="row">
                
                {
                        this.state.map( (menu,index) => <div key={index} className="col-md-4"> <ShowMenu menu={menu}/>  </div>)
                }
                


                </div>
            </div>
        );
    }
}