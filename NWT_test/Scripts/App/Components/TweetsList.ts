import {Component, View, NgFor, EventEmitter} from "angular2/angular2"

import {Tweet as TweetModel} from "./../Model/Tweet"
import {User as UserModel} from "./../Model/User"
import {Tweet} from "./Tweet"

@Component({
    selector: "tweets-list",
    inputs: ["tweets", "currentUser"],
    outputs: ["putFavourited", "removeFavourited"]
})

@View({
    directives: [NgFor, Tweet],
    template:
    `
<div>
        <div *ng-for="#tweet of tweets">
                <tweet [tweet]="tweet" [favourited]="checkIfFavourited(tweet)" (put-favourited)="onPutFavourited($event)"  (remove-favourited)="onRemoveFavourited($event)"></tweet>
        </div>
</div>
    `
})
export class TweetsList {

    public tweets: TweetModel[];
    public currentUser: UserModel;
    public putFavourited: EventEmitter;
    public removeFavourited: EventEmitter;

    constructor() {
        this.putFavourited = new EventEmitter();
        this.removeFavourited = new EventEmitter();
    }

    checkIfFavourited(tweet: TweetModel): boolean {
        if (this.currentUser.favourites.indexOf(tweet) != -1)
            return true;
        return false;
    }

    private onPutFavourited(favourite: TweetModel): void {
        this.putFavourited.next(favourite);
    }

    private onRemoveFavourited(favourite: TweetModel): void {
        this.removeFavourited.next(favourite);
    }

}
