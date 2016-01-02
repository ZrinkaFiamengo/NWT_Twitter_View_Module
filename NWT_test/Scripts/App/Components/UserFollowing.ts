import {Component, View, NgIf} from "angular2/angular2"
import {User as UserModel} from "./../Model/User"

@Component({
    selector: "user-following",
    inputs: ["isFollowing", "user"]
})

@View({
    directives: [NgIf],
    template: `<div class="panel panel-default users">
            <img src={{user.imageUrl}} class="users-image" alt="user picture" />
            <a src="#"> <label class="users-name">{{user.getFullName()}}</label><br/></a>
            <a src="#"> <span class="users-nickname">@{{user.nickname}}</span><br/></a>
            <button *ng-if="isFollowing" class="btn pull-right btn-warning">Unfollow</button>
            <button *ng-if="!isFollowing" class="btn pull-right btn-success">Follow</button>
            <ul class="nav navbar-nav">
                <li class="users-info">
                    TWEETS <br/>
                    <label>{{user.numberTweets}}</label>
                </li>
                <li class="users-info">
                    FOLLOWING<br/>
                    <label>{{user.numberFollowing}}</label>
                </li>
            </ul>
        </div>
                  `
})

export class UserFollowing {
    public isFollowing: boolean;
    public user: UserModel;
}

