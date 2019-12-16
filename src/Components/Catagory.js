import React from "react"
import { Paper } from "@material-ui/core";
import { connect } from "react-redux";
import MenuCat from "./MenuCat"
import Uuid from "uuid/v4"

class Catagory extends React.Component{

    constructor(){
        super()
        this.onAll=this.onAll.bind(this)
        
    }

    onAll(){
        let action ={
            type:"ACTION_ADDCOPYMENU",
            copyMenu:this.props.menu
        }

        this.props.dispatcher(action)

        let action1={
            type:"ACTION_ADDALLID",
            allId:true

        }
        this.props.dispatcher(action1)


      
    }
    

    render(){
        return(

           
            
            <div className="col-md-10 ">
             <Paper>
                <table className="table  "> 
                <thead><tr className="container-fluid"><th>Catagory</th></tr></thead>
                    <tbody>
                    <tr onClick={this.onAll}  className={this.props.allId===true ? "selected" : ""}>
                        <td>ALL</td>
                    </tr>

                    {

                        this.props.menuCat.map( (cat,index) => <MenuCat id={Uuid()} key={index} title={cat}/>)

                    }

                    


                    </tbody>
                </table>
                </Paper>
                </div>
               
        );
    }
}


const mapStateToProps = (state) => {

return {
    menuCat:state.menuCat,
    menu:state.menu,
    allId:state.allId
    
}

}

const mapDispatcherToProps = (dispatch) => {


    return {
        dispatcher : (action) => {
            dispatch(action)
        }
    }
}


export default connect (mapStateToProps,mapDispatcherToProps) (Catagory)


