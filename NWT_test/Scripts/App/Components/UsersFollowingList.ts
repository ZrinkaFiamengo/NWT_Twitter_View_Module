import {Component, View, NgFor, NgIf, EventEmitter} from "angular2/angular2"

import {User as UserModel} from "./../Model/User"
import {UserFollowing} from "./UserFollowing"

@Component({
    selector: "users-following-list",
    inputs: ["users", "isFollowing"],
    outputs: ["followed", "unfollowed"]
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
                <user-following [is-following] = "isFollowing" [user]="user" (followed)="onFollow($event)" (unfollowed)="onUnFollow($event)"></user-following>
        </div>
        </div>
    `
})
export class UsersFollowingList {

    public users: UserModel[];
    public isFollowing: boolean;
    public followed: EventEmitter;
    public unfollowed: EventEmitter;

    constructor() {
        this.followed = new EventEmitter();
        this.unfollowed = new EventEmitter();
    }

    private onFollow(user: UserModel): void {
        this.followed.next(user);
    }

    private onUnFollow(user: UserModel): void {
        this.unfollowed.next(user);
    }
}
