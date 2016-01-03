import {Component, View, NgFor, NgIf, EventEmitter} from "angular2/angular2"
import {Tweet as TweetModel} from "./../Model/Tweet"

@Component({
    selector: "tweet",
    inputs: ["tweet", "favourited"],
    outputs: ["putFavourited", "removeFavourited"]
})

@View({
    directives: [NgFor, NgIf],
    template: `<div class="panel panel-default tweet">
                <div class="panel-body">
                <img src={{tweet.author.imageUrl}} class="tweet-user-image" alt="user picture" />
                <div class="tweet-data">
                    <a src="#"> <label>{{tweet.author.getFullName()}}</label></a>  @{{tweet.author.nickname}} - {{tweet.publishTime|date}}
                    <div class="tweet-text">{{tweet.data}}
                       <span *ng-for="#hashtag of tweet.hashtags">
                        <a src="#">   {{hashtag.data}}</a></div>
                       </span>
                    <ul class="list-inline">
                        <li><a href="#"><i class="glyphicon glyphicon-arrow-left"></i>Reply   </a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-repeat"></i>Retweet   </a></li>
                        <li><a href="#!" *ng-if="!favourited" (click)="onPutFavourited()"><i class="glyphicon glyphicon-star-empty"></i>Favourite   </a>
                            <a href="#!" *ng-if="favourited" (click)="onRemoveFavourited()"><i class="glyphicon glyphicon-star"></i>Favourited   </a></li>  
                    </ul>
                </div>
            </div>
        </div>
                  `
})

export class Tweet {
    public tweet: TweetModel;
    public favourited: boolean;
    public putFavourited: EventEmitter;
    public removeFavourited: EventEmitter;

    constructor() {
        this.putFavourited = new EventEmitter();
        this.removeFavourited = new EventEmitter();
    }

    private onPutFavourited(): void {
        this.favourited = true;
        this.putFavourited.next(this.tweet);
    }

    private onRemoveFavourited(): void {
        this.favourited = false;
        this.removeFavourited.next(this.tweet);
    }
}

