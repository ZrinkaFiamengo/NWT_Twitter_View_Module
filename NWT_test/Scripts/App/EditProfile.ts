import {Component, View, bootstrap, NgIf} from "angular2/angular2"
import {User as UserModel} from "./Model/User"
import {EditProfileForm} from "./Components/EditProfileForm"

@Component({
    selector: "edit-profile"
})


@View({
        directives: [EditProfileForm, NgIf],
    template:
    `
    <main>
    
	<aside id="user-panel-container">
        <br/><br/><br/><br/>
        <div class="text-center">
          <img src={{currentUser.imageUrl}} class="avatar edit-profile-image" alt="user picture">
          <h6>Upload a different photo?</h6>
          <span class="btn btn-default btn-file">
            Browse <input type="file" (change)="imageChange($event)">
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

                <edit-profile-form in-label="Name:" type-of-data= "text" (out-value) = "onNameChange($event)" [in-value]="currentUser.name" >Loading form..</edit-profile-form>
                <edit-profile-form in-label="Last Name:" type-of-data= "text" (out-value) = "onLastNameChange($event)" [in-value]="currentUser.lastname" >Loading form..</edit-profile-form>
                <edit-profile-form in-label="Nickname:" type-of-data= "text" (out-value) = "onNicknameChange($event)" [in-value]="currentUser.nickname" >Loading form..</edit-profile-form>
                <edit-profile-form in-label="E-mail:" type-of-data= "email" (out-value) = "onEmailChange($event)" [in-value]="currentUser.email" >Loading form..</edit-profile-form>
                <edit-profile-form in-label="Password:" type-of-data= "text" (out-value) = "onPasswordChange($event)" [in-value]="currentUser.password" >Loading form..</edit-profile-form>
                <edit-profile-form in-label="Confirm password:" type-of-data= "text" (out-value) = "onRepeatPasswordChange($event)" [in-value]="retypedPwd" >Loading form..</edit-profile-form>


                  <div class="form-group">
                    <label class="col-md-3 control-label"></label>
                    <div class="col-md-8">
                      <input type="button" (click)="onSubmit()" class="btn btn-primary" value="Save Changes">
                      <span></span>
                      <input type="reset" (click)="onRest()" class="btn btn-default" value="Rest data">
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
    public retypedPwd: string;

    constructor() {
        this.currentUser = new UserModel("Ime", "Prezime", "Nickname", "imeprezime@gmail.com", "Password.1", "/Content/Users/User1.png");
        this.newData = this.currentUser;
        this.retypedPwd = this.currentUser.password;
        this.errorOccured = false;
        this.errorText = "";
    }

    private imageChange(inputValue: any): void {
        this.currentUser.imageUrl = URL.createObjectURL(inputValue.target.files[0]);
    }

     

    private checkName(data: string): boolean {
        var value = data.trim();
        if (value == "") {
            this.errorText = "Name required!";
            return false;
        }
        return true;
    }

    private checkLastName(data: string): boolean {
        var value = data.trim();
        if (value == "") {
            this.errorText = "Last name required!";
            return false;
        }
        return true;
    }

    private checkNickname(data: string): boolean {
        var value = data.trim();
        if (value == "") {
            this.errorText = "Nickname required!";
            return false;
        }
        return true;
    }

    private checkEmail(data: string): boolean {
        var value = data.trim();
        var emailPattern: RegExp = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
        if (value == "") {
            this.errorText = "Email required!";
            return false;
        }
        else if (!value.match(emailPattern)){
            this.errorText = "Wrong email format!";
            return false;
        }
        return true;
    }

    private checkPassword(data: string): boolean {
        var value = data.trim();
        var pwdPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,100}$/;
        if (value == "") {
            this.errorText = "Password required!";
            return false;
        }
        else if (!value.match(pwdPattern)) {
            this.errorText = "Wrong password format! (Password must be at least 6 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.)";
            return false;
        }
        return true;
    }

    private checkRepeatedPassword(retyped: string, pwd: string): boolean {
    var value = retyped.trim();
        if (value == "") {
            this.errorText = "Retype password!";
            return false;
        }
        else if (pwd!=retyped) {
            this.errorText = "Passwords do not match!";
            return false;
        }
        return true;
    }
    
    private onNameChange(data: string) {
        this.newData.name = data;

    }

    private onLastNameChange(data: string) {
        this.newData.lastname = data;
    }

    private onNicknameChange(data: string) {
        this.newData.nickname = data;
    }

    private onEmailChange(data: string) {
        this.newData.email = data;
    }

    private onPasswordChange(data: string) {
        this.newData.password = data;
    }

    private onRepeatPasswordChange(data: string) {
        this.retypedPwd = data;
    }

    onSubmit(): void {
        if (this.checkName(this.newData.name)
            && this.checkLastName(this.newData.lastname)
            && this.checkNickname(this.newData.nickname)
            && this.checkEmail(this.newData.email)
            && this.checkPassword(this.newData.password)
            && this.checkRepeatedPassword(this.retypedPwd, this.newData.password)) {
            this.errorText = "";
            this.errorOccured = false;
            this.currentUser = this.newData;
        }
        else
            this.errorOccured = true;
    }

    onRest(): void {
        this.newData.name = "";
        this.newData.lastname = "";
        this.newData.nickname = "";
        this.newData.password = "";
        this.newData.password = "";
    }

}

bootstrap(EditProfile);