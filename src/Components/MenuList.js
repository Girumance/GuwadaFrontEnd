import React from "react"
import icon from "../IMG/cartIcon.png"
import {connect} from "react-redux"
import { Paper } from "@material-ui/core"
import Axios from "axios"


 class MenuList extends React.Component{

    constructor(){
            super()
            this.addToCart=this.addToCart.bind(this)
            this.onLike=this.onLike.bind(this)
            this.onDislike=this.onDislike.bind(this)
            this.state={
                icon:"",
                likes:null,
                dislikes:null,
                likeStatus:""
            }
    }

    onLike(){

        
        if(!this.props.isLoggedIn || !this.props.account.role=="USER") return

        let data={
            likerId:this.props.account.id,
            menuId:this.props.menu.id,
            likeType:"Like"

        }

    Axios.post("http://127.0.0.1:1234/likes/save",data).then( res =>{
            this.setState({
                likes:res.data[0],
                dislikes:res.data[1]
            })
    })

    this.setState({
        likeStatus:"Like"
    })
    }

    onDislike(){
        if(!this.props.isLoggedIn || !this.props.account.role=="USER") return
        let data={
            likerId:this.props.account.id,
            menuId:this.props.menu.id,
            likeType:"Dislike"

        }

    Axios.post("http://127.0.0.1:1234/likes/save",data).then( res =>{
        
            this.setState({
                likes:res.data[0],
                dislikes:res.data[1]
            })
    }) 

    this.setState({
        likeStatus:"Dislike"
    })
    }

    addToCart(){

        if(this.props.isLoggedIn && this.props.account.role=="USER"){

        if(this.props.kitId===undefined){
            let action={
                   type:"ACTION_ADDKIT",
                   kitchenId:this.props.kid
               }
               
               this.props.addCart(action)

            
               
               
           }

        if(this.props.cusId==="none"){
         let action={
                type:"ACTION_ADDCUS",
                customerId:"1234"
            }
            
            this.props.addCart(action)

            
            
        }

            let mealDetails={
            title:this.props.menu.title,
            quantitiy:1
            }
           let meal={
            type:"ACTION_ADDMEAL",
            meal:mealDetails
           }

           this.props.addCart(meal);
        }
    }

    componentDidMount(){
      let  path="http://127.0.0.1:1234/likes/likes/"+this.props.menu.id;
       Axios.get(path).then( res =>{
           this.setState({
               likes:res.data
           })
       })

   let    path2="http://127.0.0.1:1234/likes/dislikes/"+this.props.menu.id;
       Axios.get(path2).then( res =>{
        this.setState({
            dislikes:res.data
        })
    })
     
    if(this.props.isLoggedIn && this.props.account.role=="USER"){
        let data={
            likerId:this.props.account.id,
            menuId:this.props.menu.id
        }

        Axios.post("http://127.0.0.1:1234/likes/getLike",data).then(res => {

        this.setState({
            likeStatus:res.data
        })
        })
    }
    

        
    }

    render(){
        
        

        
    
        return(
            <Paper>
            <div className="container-fluid">
                
            <div  className="row">

                <div className="col-md-3">
                <img className="img-fluid" src={`http://localhost:1234/image/download/${this.props.menu.id}`}/>
                </div>
                <div className="col-md-9">

                    <div className="row">
                 <div className="col-md-8">
                        <h4>{this.props.menu.title}</h4>
                        </div>
                

                <div className="col-md-2">
                {this.props.menu.price} ETB
                </div>

                <div className={this.props.isLoggedIn && this.props.account.role=="USER" ? "col-md-2 cartIcon" :"col-md-2 cartIconDis"} >
                    <div className="">
                     <span onClick={this.addToCart} className="fa  fa-cart-plus fa-lg fa-2x">   </span> 
                </div>
                </div>
                </div>

                <div class="row">

                    <div className="col-md-11">
                        <h5>{this.props.menu.description}</h5>
                    </div>

                </div>

                <div className="row likes">
                    
                    <div className="col-xs-3 col-md-3 like-icon">
                        <span onClick={this.onLike} className= {this.state.likeStatus==="Like" ? "fa fa-thumbs-up fa-lg active ": "fa fa-thumbs-up fa-lg" }> <i>{this.state.likes}</i></span>
                    </div>

                    <div className="col-xs-3 col-md-3">
                    <span onClick={this.onDislike} className= {this.state.likeStatus==="Dislike" ? "fa fa-thumbs-down fa-lg active ": "fa fa-thumbs-down fa-lg" }> <i>{this.state.dislikes}</i> </span>
                    </div>
                    

                </div>
                </div>
                </div>

            </div>
            </Paper>
        );

    }
}

const mapStateToProps=(state) => {

return {
    cusId:state.customerId,
    kitId:state.kitchenId,
    meal:state.mealorder,
    isLoggedIn:state.isLoggedIn,
    account:state.account
}
}

const mapDispatchToProps= (dispatch) =>{

return {

    addCart:(action) => {dispatch(action)}
}

}



export default connect(mapStateToProps,mapDispatchToProps) (MenuList);