import {Component, View, bootstrap, NgIf} from "angular2/angular2"
import {User as UserModel} from "./Model/User"
import {EditForm} from "./Components/EditForm"

@Component({
    selector: "edit-profile"
})

@View({
    directives: [EditForm, NgIf],
    template:
    `
    <main>
    
	<aside id="user-panel-container">
        <br/><br/><br/><br/>
        <div class="text-center">
          <img src={{currentUser.imageUrl}} class="avatar edit-profile-image" alt="user picture">
          <h6>Upload a different photo?</h6>
          <span class="btn btn-default btn-file">
            Browse <input type="file">
           </span>
        <div>
     </aside>

      
      <div id="main-content-container" class="panel">
        <h3>Personal info</h3>
        
        <form class="form-horizontal" role="form">

                <div *ng-if="errorOccured" class="alert alert-info alert-dismissable">
                  <a class="panel-close close" data-dismiss="alert">×</a> 
                  {{errorText}}
                </div>

                <edit-form in-label="Name:" type-of-data= "text" [in-value]="currentUser.name" >Loading form..</edit-form>
                <edit-form in-label="Last Name:" type-of-data= "text" [in-value]="currentUser.lastname" >Loading form..</edit-form>
                <edit-form in-label="Nickname:" type-of-data= "text" [in-value]="currentUser.nickname" >Loading form..</edit-form>
                <edit-form in-label="E-mail:" type-of-data= "email" [in-value]="currentUser.email" >Loading form..</edit-form>
                <edit-form in-label="Password:" type-of-data= "password" [in-value]="currentUser.password" >Loading form..</edit-form>
                <edit-form in-label="Confirm password:" type-of-data= "password" [in-value]="currentUser.password" >Loading form..</edit-form>


                  <div class="form-group">
                    <label class="col-md-3 control-label"></label>
                    <div class="col-md-8">
                      <input type="button" class="btn btn-primary" value="Save Changes">
                      <span></span>
                      <input type="reset" class="btn btn-default" value="Rest data">
                    </div>
                  </div>
        </form>
      </div>
</main>
`
})

export class EditProfile {
    public currentUser: UserModel;
    public newData: UserModel;
    public errorOccured: boolean;
    public errorText: string;

    constructor() {
        this.currentUser = new UserModel("Ime", "Prezime", "Nickname", "imeprezime@gmail.com", "Password.1", "/Content/Users/User1.png");
        this.newData = this.currentUser;
        this.errorOccured = false;
        this.errorText = "";
    }
}

bootstrap(EditProfile);