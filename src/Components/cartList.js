import React from "react"
import { connect } from "react-redux";
import { elementType } from "prop-types";

 class CartList extends React.Component{

    constructor(props){
        super(props)

        this.onQuantityChange=this.onQuantityChange.bind(this);
        this.onDelete=this.onDelete.bind(this)

    }

    onQuantityChange(e){

        let meal=this.props.mealorder;
        let data=[]
        
        meal.map( (elemet)=>{

            if(elemet.title===this.props.meal.title){
                if(e.target.value<1)
                elemet.quantitiy=1;
                else
                elemet.quantitiy=e.target.value
            }
            data.push(elemet)

        });

        let action={
            type:"ACTION_ADDMEALARRAY",
            meal:data
        }

        this.props.dispatcher(action);
        

    }



    onDelete(e){

        let meal=this.props.mealorder;
        let data=[]
        
        meal.map( (elemet)=>{

            if(!(elemet.title===this.props.meal.title)){
                data.push(elemet)    
            }
            

        });

        let action={
            type:"ACTION_ADDMEALARRAY",
            meal:data
        }

        this.props.dispatcher(action);


    }



        render(){

            return(
                <div className="container-fluid">
                

                    <div className="row">
                        <div className="col-md-5 col-xs-5">
                        <h5>{this.props.meal.title}</h5>
                        </div>
                        <div className="col-md-5 col-xs-4 quantitiy"  >
                        <input onChange={this.onQuantityChange} className="form-control" type="number" defaultValue={this.props.meal.quantitiy}/>
                        </div>
                       

                        <div className="col-md-1 col-xs-1">
                                <span onClick={this.onDelete} className="fa fa-trash fa-lg"></span>
                        </div>
                        
                    </div>
                    <hr />
                </div>
            );
        }
}

const mapStateToProps= (state) =>{
return {
    mealorder:state.mealorder
}
}

const mapDispacherToProps= (dispatcher) =>{

    return{
        dispatcher:(action) =>{
            dispatcher(action)
        }
    }
}


export default connect(mapStateToProps,mapDispacherToProps) (CartList)