import React from "react"
import { Paper } from "@material-ui/core"
import {withRouter,Redirect} from "react-router-dom"
import { connect } from "react-redux"
class SearchResult extends React.Component{

    constructor(props){
        super(props)

        this.onClickEvent=this.onClickEvent.bind(this)
        this.state={
            redirect:false
        }
    }

    onClickEvent(){
        
        let action={
            type:"ACTION_SEARTITLE",
            searchTitle:this.props.data.title
        }   
        
        this.props.dispacher(action)
    
        
    }

    render(){
        let path="/Kitechen/"+this.props.data.id;
        return(
            

            <div onClick={this.onClickEvent} className="searchResult">
                
                {
                (this.state.redirect==true) ? <Redirect to={path}/> :""
            }
                
            <h6  >{this.props.data.title}</h6>
            <hr/>
               
    
            </div>


        

        );
    }
}

const mapStateToProps= (state) =>{
    
    return{
        state
    }
}

const mapDispacherToProps = (dispach) =>{
    return{
    dispacher: (action) =>{
        dispach(action);
    }
}
}


export default connect(mapStateToProps,mapDispacherToProps) (withRouter(SearchResult));