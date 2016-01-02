import {Component, View, bootstrap} from "angular2/angular2"
import {Hashtag as HashtagModel} from "./Model/Hashtag"
import {Tweet as TweetModel} from "./Model/Tweet"
import {User as UserModel} from "./Model/User"
import {TweetsList} from "./Components/TweetsList"
import {Trends} from "./Components/Trends"
import {UserInfo} from "./Components/UserInfo"


@Component({
    selector: "profile"
})

@View({
    directives: [TweetsList, Trends, UserInfo],
    template:
    `<div class="panel panel-default" id="profile-panel">
    <img src="/Content/Users/User1.png" id="profile-user-image" alt="user picture" />
    <a src="#"> <label id="profile-user-name">Ime Prezime</label><br/></a>
    <a src="#"> <span id="profile-nickname">@Nickname</span><br/></a>
    <ul class="hidden-xs nav navbar-nav">
        <li class="profile-info">
            TWEETS <br/>
            <label>5</label>
        </li>
        <li class="profile-info">
            FOLLOWING<br/>
            <label>20</label>
        </li>
    </ul>
    <button class="btn button pull-right edit-profile">Edit Profile</button>
</div>

<main>
    <div id="profile-data-div">
        <div class="panel panel-default tweet">
            <div class="panel-body">
                <img src="/Content/Users/User1.png" class="tweet-user-image" alt="user picture" />
                <div class="tweet-data">
                    <a src="#"> <label>Ime Prezime </label></a>@Nickname - 12. prosinca
                    <div class="tweet-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a src="#"> #hashtag_trend1</a></div>
                    <ul class="list-inline">
                        <li><a href="#"><i class="glyphicon glyphicon-arrow-left"></i> Reply</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-repeat"></i> Retweet</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-pencil"></i> Edit</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-remove"></i> Delete</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="panel panel-default tweet">
            <div class="panel-body">
                <img src="/Content/Users/User1.png" class="tweet-user-image" alt="user picture" />
                <div class="tweet-data">
                    <a src="#"> <label>Ime Prezime </label></a>@Nickname - 12. prosinca
                    <div class="tweet-text">Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.<a src="#"> #hashtag_trend1</a><a src="#"> #hashtag_trend2</a></div>
                    <ul class="list-inline">
                        <li><a href="#"><i class="glyphicon glyphicon-arrow-left"></i>  Reply</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-repeat"></i>  Retweet</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-pencil"></i> Edit</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-remove"></i> Delete</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="panel panel-default tweet">
            <div class="panel-body">
                <img src="/Content/Users/User1.png" class="tweet-user-image" alt="user picture" />
                <div class="tweet-data">
                    <a src="#"> <label>Ime Prezime </label></a>@Nickname - 12. prosinca
                    <div class="tweet-text">Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum. <a src="#"> #hashtag_trend6</a></div>
                    <ul class="list-inline">
                        <li><a href="#"><i class="glyphicon glyphicon-arrow-left"></i>  Reply</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-repeat"></i>  Retweet</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-pencil"></i> Edit</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-remove"></i> Delete</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <aside id="user-panel-container" class="hidden-xs trends">

        <trends [hashtags]="hashtags" >Loading list..</trends>

    </aside>
</main>
`
})

export class Profile {
    public hashtags: HashtagModel[];
    public tweets: TweetModel[];
    public users: UserModel[];
    public currentUser: UserModel;

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

        this.tweets = [
            new TweetModel(this.users[0], new Date(2015, 12, 12), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", [this.hashtags[0], this.hashtags[4]]),
            new TweetModel(this.users[1], new Date(2015, 12, 10), "Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.", [this.hashtags[5], this.hashtags[1], this.hashtags[3]]),
            new TweetModel(this.users[2], new Date(2015, 12, 4), "Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum.", [this.hashtags[5]]),
            new TweetModel(this.users[3], new Date(2015, 12, 2), "Donec lacinia massa lectus. Sed a tristique odio.", [this.hashtags[3], this.hashtags[4], this.hashtags[1]])
        ];

        this.currentUser = this.users[0];
    }
}

bootstrap(Profile);