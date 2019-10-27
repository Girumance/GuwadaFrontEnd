import React from "react"
import MenuList from "./MenuList"
import Axios from "axios"
import { connect } from "react-redux"

class Menu extends React.Component{

constructor(props){
    super(props)

    this.state={
        menu:[]
        
        

    }
}



componentDidMount(){
    let path="http://localhost:1234/kitechen/getmenu/"+this.props.id

    Axios.get(path).then( res => {

        this.setState({
            menu:res.data
        })

    }

    );
}

    render(){  
       
        return(
            <div className="row">
                <h3>Dishes</h3>
                <table className="table">
                       <tbody>
                    {
                        
                      this.state.menu.map( (menu,index) => <tr  key={index}><td><MenuList kid={this.props.id} menu={menu}/></td></tr> )    

                    }                       
                   
                   </tbody>
                 </table>

            </div>
        );
    }
}





export default connect() (Menu);