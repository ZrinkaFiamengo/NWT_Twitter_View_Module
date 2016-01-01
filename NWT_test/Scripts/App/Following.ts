import {Component, View, bootstrap} from "angular2/angular2"
import {Hashtag as HashtagModel} from "./Model/Hashtag"
import {Tweet as TweetModel} from "./Model/Tweet"
import {User as UserModel} from "./Model/User"
import {TweetsList} from "./Components/TweetsList"
import {Trends} from "./Components/Trends"
import {UserInfo} from "./Components/UserInfo"


@Component({
    selector: "following"
})

@View({
    directives: [TweetsList, Trends, UserInfo],
    template:
    `<main>
    <aside id="user-panel-container">
        <user-info [user]="users[0]">Loading user info..</user-info>

        <trends [hashtags]="hashtags">Loading list..</trends>
    </aside>
    <div id="main-content-container" class="panel">
        <h3>Users you followed</h3><br/>

        <div class="panel panel-default users">
            <img src="/Content/Users/User2.png" class="users-image" alt="user picture" />
            <a src="#"> <label class="users-name">Ime Prezime</label><br/></a>
            <a src="#"> <span class="users-nickname">@Nickname</span><br/></a>
            <button class="btn pull-right btn-warning">Unfollow</button>
            <ul class="nav navbar-nav">
                <li class="users-info">
                    TWEETS <br/>
                    <label>5</label>
                </li>
                <li class="users-info">
                    FOLLOWING<br/>
                    <label>20</label>
                </li>
            </ul>
        </div>

        <div class="panel panel-default users">
            <img src="/Content/Users/User3.png" class="users-image" alt="user picture" />
            <a src="#"> <label class="users-name">Ime Prezime</label><br/></a>
            <a src="#"> <span class="users-nickname">@Nickname</span><br/></a>
            <button class="btn pull-right btn-warning">Unfollow</button>
            <ul class="nav navbar-nav">
                <li class="users-info">
                    TWEETS <br/>
                    <label>5</label>
                </li>
                <li class="users-info">
                    FOLLOWING<br/>
                    <label>20</label>
                </li>
            </ul>
        </div>

        <hr>
        <h3>Other Users</h3><br/>

        <div class="panel panel-default users">
            <img src="/Content/Users/User2.png" class="users-image" alt="user picture" />
            <a src="#"> <label class="users-name">Ime Prezime</label><br/></a>
            <a src="#"> <span class="users-nickname">@Nickname</span><br/></a>
            <button class="btn pull-right btn-success">Follow</button>
            <ul class="nav navbar-nav">
                <li class="users-info">
                    TWEETS <br/>
                    <label>5</label>
                </li>
                <li class="users-info">
                    FOLLOWING<br/>
                    <label>20</label>
                </li>
            </ul>
        </div>

        <div class="panel panel-default users">
            <img src="/Content/Users/User4.png" class="users-image" alt="user picture" />
            <a src="#"> <label class="users-name">Ime Prezime</label><br/></a>
            <a src="#"> <span class="users-nickname">@Nickname</span><br/></a>
            <button class="btn pull-right btn-success">Follow</button>
            <ul class="nav navbar-nav">
                <li class="users-info">
                    TWEETS <br/>
                    <label>5</label>
                </li>
                <li class="users-info">
                    FOLLOWING<br/>
                    <label>20</label>
                </li>
            </ul>
        </div>
    </div>


</main>`
})

export class Following {
    public hashtags: HashtagModel[];
    public tweets: TweetModel[];
    public users: UserModel[];

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



        this.tweets = [
            new TweetModel(this.users[0], new Date(2015, 12, 12), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", [this.hashtags[0], this.hashtags[4]]),
            new TweetModel(this.users[1], new Date(2015, 12, 10), "Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.", [this.hashtags[5], this.hashtags[1], this.hashtags[3]]),
            new TweetModel(this.users[2], new Date(2015, 12, 4), "Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum.", [this.hashtags[5]]),
            new TweetModel(this.users[3], new Date(2015, 12, 2), "Donec lacinia massa lectus. Sed a tristique odio.", [this.hashtags[3], this.hashtags[4], this.hashtags[1]])
        ];
    }
}

bootstrap(Following);