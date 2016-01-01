import {Component, View, NgFor, bootstrap} from "angular2/angular2"

import {Tweet as TweetModel} from "./../Model/Tweet"
import {Tweet} from "./Tweet"

@Component({
    selector: "tweets-list",
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

    constructor() {
        this.tweets = [
            new TweetModel("Ime1", "Prezime1", "Nickname1", "/Content/Users/User2.png", new Date(2015, 12, 12), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", ["#hashtag_trend1", "#hashtag_trend2"]),
            new TweetModel("Ime2", "Prezime2", "Nickname2", "/Content/Users/User3.png", new Date(2015, 12, 10), "Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.", ["#hashtag_trend4", "#hashtag_trend3", "#hashtag_trend4"]),
            new TweetModel("Ime3", "Prezime3", "Nickname3", "/Content/Users/User1.png", new Date(2015, 12, 4), "Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum.", ["#hashtag_trend6"]),
            new TweetModel("Ime4", "Prezime4", "Nickname4", "/Content/Users/User4.png", new Date(2015, 12, 2), "Donec lacinia massa lectus. Sed a tristique odio.", ["#hashtag_trend1", "#hashtag_trend2", "#hashtag_trend4"])
        ];
    }

}

bootstrap(TweetsList);