import {Component, View, NgFor, NgIf} from "angular2/angular2"

import {User as UserModel} from "./../Model/User"
import {UserFollowing} from "./UserFollowing"

@Component({
    selector: "users-following-list",
    inputs: ["users", "isFollowing"]
})

@View({
    directives: [NgFor,NgIf, UserFollowing],
    template:
    `
        <div>
        <h3 *ng-if="isFollowing">Users you followed</h3>
        <h3 *ng-if="!isFollowing">Other users</h3>
        <br/>
        <div *ng-for="#user of users">
                <user-following [is-following] = "isFollowing" [user]="user"></user-following>
        </div>
        </div>
    `
})
export class UsersFollowingList {

    public users: UserModel[];
    public isFollowing: boolean;
}
