import {Component, View, NgFor} from "angular2/angular2"

import {Tweet as TweetModel} from "./../Model/Tweet"
import {Tweet} from "./Tweet"

@Component({
    selector: "tweets-list",
    inputs: ["tweets"]
})

@View({
    directives: [NgFor, Tweet],
    template:
    `
        <div *ng-for="#tweet of tweets">
                <tweet [tweet]="tweet"></tweet>
        </div>
    `
})
export class TweetsList {

    public tweets: TweetModel[];

}
