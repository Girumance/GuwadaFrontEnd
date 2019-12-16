import React from "react"
import { connect } from "react-redux";
import UuId from "uuid/v4"
class MenuCat extends React.Component{


    constructor(){
        super();
        this.onFiletCLick=this.onFiletCLick.bind(this)
    }

    onFiletCLick(){

        let newMenu=[];

            this.props.menu.map( menu => {

                if(menu.menuType===this.props.title)
                newMenu.push(menu)

            }) 

            let action ={
                type:"ACTION_ADDCOPYMENU",
                copyMenu:newMenu
            }

            this.props.dispatcher(action)

            let action1={
                type:"ACTION_ADDCATID",
                catId:this.props.id

            }

           

            this.props.dispatcher(action1)


            let action2={
                type:"ACTION_ADDALLID",
                allId:false
    
            }
    
           this.props.dispatcher(action2)

        
    }

    render (){

        
        return (
            <React.Fragment>

                    <tr onClick={this.onFiletCLick} className={(this.props.catId==this.props.id )? "selected" : ""}>
                        <td>{this.props.title}</td>
                    </tr> 

            </React.Fragment>

        
        )
    }

}

const mapStateToProps = (state) => {

    return {
        copyMenu:state.copyMenu,
        menu:state.menu,
        catId:state.catId,
       // allId:state.allId
    }

}

const mapDispatcherToProps = (dispatch) =>{

    return {
        dispatcher: (action) => {
            dispatch(action)
        }
    }

}

export default connect(mapStateToProps,mapDispatcherToProps) (MenuCat);