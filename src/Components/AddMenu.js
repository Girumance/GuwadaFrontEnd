import React from "react"
import axios from "axios"
import { connect } from "react-redux";




class AddKMenu extends React.Component{

  constructor(){
    super();
    this.addMenu=this.addMenu.bind(this);
    this.onChange=this.onChange.bind(this);

  }

  onChange(){
    let image=this.refs.image.value;

    console.warn("image:"+image)
  }

  addMenu(){

    let title=this.refs.title.value;
    let desc=this.refs.desc.value;
    let price=this.refs.price.value;
    let type=this.refs.type.value;


    let data={
        "title":title,
        "description":desc,
        "price":price,
        "menuType":type
    }

    
      let path="http://127.0.0.1:1234/kitechen/addMenu/"+this.props.account.id
      axios.post(path,data).then( res=>{

      if(res.data==0){
          console.log("Menu with the same title does exist")
      }
          
        console.log("status code"+res.data)
      });


}


    render(){
        return(
           
            <div className="container">
              
               <div className="setMargin">
  
                                <h3>Add a Menu!</h3>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" class="form-control"  aria-describedby="Add title" placeholder="Title" ref="title"/>
                        <small id="emailHelp" class="form-text text-muted">Please enter your title for your service!</small>
                      </div>
                      <div class="form-group">
                        <label for="discription">Discription</label>
                        <textarea  class="form-control" id="exampleInputPassword1" placeholder="Discription" ref="desc">
                          </textarea>

                          <small id="emailHelp" class="form-text text-muted">Please tell us about your kitchen!</small>
                      </div>


                      <div class="form-group">
                        <label for="exampleInputEmail1">price</label>
                        <input type="text" class="form-control"  aria-describedby="price" placeholder="price" ref="price"/>
                        <small id="emailHelp" class="form-text text-muted">Plase enter the price in ETB</small>
                         </div>

                      <div class="form-group">
                        <label for="file">Menu Type</label>
                        <select  class="form-control" id="type" ref="type" > 
                            <option selected> FASTING</option>
                            <option> BREAKFAST</option>
                            <option>LUNCH</option>
                            <option> BEVERAGE</option>
                            <option> DESSERT</option>
                            <option>DINNER</option>
                            <option>PIZZA</option>
                            <option> CHICKEN</option>
                            <option> FISH</option>
                            <option>BEEF</option>
                            <option>BURGER</option>
                        </select>
                        <small id="emailHelp" class="form-text text-muted">please select your Menu type!!</small>
                      </div>

                      <div class="form-group">
                        <label for="file">Picture</label>
                        <input type="file" class="form-control" id="file" placeholder="Picture" ref="image" onChange={this.onChange}/>
                        <small id="emailHelp" class="form-text text-muted">Upload a picture for your Menu!!</small>
                      </div>

      
          <button  onClick={this.addMenu} class="btn btn-primary">Add</button>
                
</div>
</div>
            
        );
    }

}

const mapStateToProps= (state) =>{

  return {
    account:state.account
  }
}

export default connect(mapStateToProps) (AddKMenu)