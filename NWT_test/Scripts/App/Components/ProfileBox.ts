import {Component, View} from "angular2/angular2"
import {User as UserModel} from "./../Model/User"

@Component({
    selector: "profile-box",
    inputs: ["user"]
})

@View({
    template:
    `
        <div class="panel panel-default" id="profile-panel">
    <img src={{user.imageUrl}} id="profile-user-image" alt="user picture" />
    <a src="#"> <label id="profile-user-name">{{user.getFullName()}}</label><br/></a>
    <a src="#"> <span id="profile-nickname">@{{user.nickname}}</span><br/></a>
    <ul class="hidden-xs nav navbar-nav">
        <li class="profile-info">
            TWEETS <br/>
            <label>{{user.numberTweets()}}</label>
        </li>
        <li class="profile-info">
            FOLLOWING<br/>
            <label>{{user.numberFollowing()}}</label>
        </li>
    </ul>
    <button class="btn button pull-right edit-profile">Edit Profile</button>
</div>
`
})

export class ProfileBox {
    public user: UserModel;
}