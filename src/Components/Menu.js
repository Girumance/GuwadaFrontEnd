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
    let path="http://127.0.0.1:1234/kitechen/getrealmenu/"+this.props.id

    Axios.get(path).then( res => {

        this.setState({
            menu:res.data
        })

        let action1={
            type:"ACTION_ADDMENU",
            menu:res.data
        }

        this.props.dispatcher(action1)

        let action2={
            type:"ACTION_ADDCOPYMENU",
            copyMenu:res.data
        }
        this.props.dispatcher(action2)
        let menucat=[]

        let isMenuCatAvaliable= (cat)=>{
           let x=0;
           for(;x<menucat.length;x++)
           if(menucat[x]===cat)return true;

            return false;
    }

        
        res.data.map( menu => {

            if(!isMenuCatAvaliable(menu.menuType))
            menucat.push(menu.menuType)

        
        })



        let  action ={
            type:"ACTION_ADDMENUCAT",
            menuCat:menucat
        }

        this.props.dispatcher(action)

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
                        
                      this.props.copyMenu.map( (menu,index) => <tr  key={index}><td><MenuList kid={this.props.id} menu={menu}/></td></tr> )    

                    }                       
                   
                   </tbody>
                 </table>

            </div>
        );
    }
}


const mapStateToProps= (state)=>{

return {
    copyMenu:state.copyMenu
}

}

const mapDispatcherToProps = (dispatch) => {


    return {
        dispatcher:(action) =>{
            dispatch(action);
        }
    }
}




export default connect(mapStateToProps,mapDispatcherToProps) (Menu);