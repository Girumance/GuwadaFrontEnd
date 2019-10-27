import React from "react"
import Login from "./Login"
import { connect } from "react-redux";

class Poster extends React.Component{

render(){
    return (
        <div className="Poster container-fluid">
            <div className="Poster-Shadow container-fluid">
            </div>
                
            <div className="Quote text-center container-fluid">
                
                <Login/>

                    

            </div>

          
           

        </div>
    );
}

}

const mapStateToProps=(state) =>{

    return {
        logincomp:state.logincomp
    }
}

const maspDispacherToProps= (dispacher) =>{

    return {
        Login: (action) => {
            dispacher(action)
        }
    }
}

export default connect(mapStateToProps,maspDispacherToProps) (Poster)