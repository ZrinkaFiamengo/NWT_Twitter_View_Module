﻿import {Component, View, bootstrap} from "angular2/angular2"
import {Hashtag as HashtagModel} from "./Model/Hashtag"
import {User as UserModel} from "./Model/User"
import {Trends} from "./Components/Trends"
import {UserInfo} from "./Components/UserInfo"
import {UsersFollowingList} from "./Components/UsersFollowingList"


@Component({
    selector: "following"
})

@View({
    directives: [Trends, UserInfo, UsersFollowingList],
    template:
    `<main>
    <aside id="user-panel-container">
        <user-info [user] = "currentUser" >Loading user info..</user-info>
        <trends [hashtags]="hashtags">Loading list..</trends>
    </aside>

    <div id="main-content-container" class="panel">
        <users-following-list [users]="currentUser.following" is-following = "true" (unfollowed)="onUnFollow($event)">Loading users you followed..</users-following-list>
        <hr/>
        <users-following-list [users]="notFollowing" (followed)="onFollow($event)">Loading other users..</users-following-list>    
    </div>

    </main>
    `
})

export class Following {
    public hashtags: HashtagModel[];
    public users: UserModel[];
    public currentUser: UserModel;
    public notFollowing: UserModel[];

    constructor() {
        this.hashtags = [
            new HashtagModel("#hashtag_trend1"),
            new HashtagModel("#hashtag_trend2"),
            new HashtagModel("#hashtag_trend3"),
            new HashtagModel("#hashtag_trend4"),
            new HashtagModel("#hashtag_trend5"),
            new HashtagModel("#hashtag_trend6"),
        ];


        this.users = [
            new UserModel("Ime", "Prezime", "Nickname", "/Content/Users/User1.png"),
            new UserModel("Ime2", "Prezime2", "Nickname2", "/Content/Users/User3.png"),
            new UserModel("Ime3", "Prezime3", "Nickname3", "/Content/Users/User2.png"),
            new UserModel("Ime4", "Prezime4", "Nickname4", "/Content/Users/User4.png"),
        ];

        this.users[0].following = [this.users[2], this.users[1]];
        this.users[1].following = [this.users[2]];
        this.users[2].following = [this.users[3], this.users[1], this.users[0]];
        this.users[3].following = [this.users[2], this.users[1]];

        this.currentUser = this.users[0];

        this.notFollowing = [];

        this.users.forEach(user=> {
            if (user != this.currentUser && this.currentUser.following.indexOf(user)==-1)
                this.notFollowing.push(user);
        });
    }

    private onFollow(user: UserModel) {
        var index = this.notFollowing.indexOf(user);

        if (index != -1) {
            this.notFollowing.splice(index, 1);
        }

        this.currentUser.following.push(user);
    }

    private onUnFollow(user: UserModel) {
        var index = this.currentUser.following.indexOf(user);

        if (index != -1) {
            this.currentUser.following.splice(index, 1);
        }

        this.notFollowing.push(user);
    }
}

bootstrap(Following);