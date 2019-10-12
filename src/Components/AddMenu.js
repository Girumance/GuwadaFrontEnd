import React from "react"

export default class AddKMenu extends React.Component{

    render(){
        return(
           
            <div className="container">
               <div className="setMargin">
  
                <form>
                <h3>Add a Menu!</h3>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" class="form-control"  aria-describedby="Add title" placeholder="Title"/>
                        <small id="emailHelp" class="form-text text-muted">Please enter your title for your service!</small>
                      </div>
                      <div class="form-group">
                        <label for="discription">Discription</label>
                        <textarea  class="form-control" id="exampleInputPassword1" placeholder="Discription">
                          </textarea>

                          <small id="emailHelp" class="form-text text-muted">Please tell us about your kitchen!</small>
                      </div>


                      <div class="form-group">
                        <label for="exampleInputEmail1">price</label>
                        <input type="text" class="form-control"  aria-describedby="price" placeholder="price"/>
                        <small id="emailHelp" class="form-text text-muted">Plase enter the price in ETB</small>
                         </div>

                      <div class="form-group">
                        <label for="file">Menu Type</label>
                        <select  class="form-control" id="type" > 
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
                        <input type="file" class="form-control" id="file" placeholder="Picture"/>
                        <small id="emailHelp" class="form-text text-muted">Upload a picture for your Menu!!</small>
                      </div>




                      
                      
                      <button type="submit" class="btn btn-primary">Add</button>
                </form>

</div>
</div>
            
        );
    }

}