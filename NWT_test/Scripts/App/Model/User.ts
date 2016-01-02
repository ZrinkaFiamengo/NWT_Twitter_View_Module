import {Tweet} from "./Tweet"

export class User {
    public name: string;
    public lastname: string;
    public nickname: string;
    public imageUrl: string;
    public tweets: Tweet[];
    public favourites: Tweet[];
    public following: User[];

    constructor(name: string, lastname: string, nickname: string, imageUrl: string, tweets: Tweet[] = [], following: User[] = [], favourites: Tweet[] = []) {
        this.name = name;
        this.lastname = lastname;
        this.nickname = nickname;
        this.imageUrl = imageUrl;
        this.tweets = tweets;
        this.favourites = favourites;
        this.following = following;
    }

    public getFullName(): string {
        return this.name + " " + this.lastname;
    }

    public numberTweets(): number{
        return this.tweets.length;
    }

    public numberFollowing(): number {
        return this.following.length;
    }
}