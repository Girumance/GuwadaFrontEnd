import React from "react"

export default class AddKitchen extends React.Component{

    render(){
        return(
           
            <div className="container">
               <div className="setMargin">
  
                <form>
                <h3>Create Your Kitchen!</h3>
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
                        <label for="file">Kitchen Type</label>
                        <select  class="form-control" id="type" > 
                            <option selected> HOTEL</option>
                            <option> RESTAURANT</option>
                            <option> BAR</option>
                            <option> CAFE</option>
                        </select>
                        <small id="emailHelp" class="form-text text-muted">please select your kitchen type!!</small>
                      </div>

                      <div class="form-group">
                        <label for="file">Picture</label>
                        <input type="file" class="form-control" id="file" placeholder="Picture"/>
                        <small id="emailHelp" class="form-text text-muted">Upload a picture for your kitchen!!</small>
                      </div>




                      <div class="form-group form-check">
                      <label class="form-check-label" for="from">From</label>
                        <input type="time" class="form-check-input" id="from"/>
                       
                      </div>
                      <button type="submit" class="btn btn-primary">Create</button>
                </form>

</div>
</div>
            
        );
    }

}