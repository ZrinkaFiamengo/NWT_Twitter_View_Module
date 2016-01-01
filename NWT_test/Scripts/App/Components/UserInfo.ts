import {Component, View} from "angular2/angular2"
import {User as UserModel} from "./../Model/User"

@Component({
    selector: "user-info",
    inputs: ["user"]
})

@View({
    template:
    `
        <div class="panel panel-default user-panel">
    <img src={{user.imageUrl}} id="user-panel-user-image" alt="user picture" />
    <a class="hidden-xs" src="#"> <label id="user-panel-user-name">{{user.getFullName()}}</label><br /></a>
    <a class="hidden-xs" src="#"> <span id="user-panel-nickname">@@{{user.nickname}}</span><br /></a>
    <ul class="hidden-xs nav navbar-nav">
        <li class="user-container-info">
            TWEETS <br />
            <label>5</label>
        </li>
        <li class="user-container-info">
            FOLLOWING<br />
            <label>20</label>
        </li>
    </ul>
</div>
`
})

export class UserInfo {
    public user: UserModel;
}