import {Hashtag} from "./Hashtag"
import {User} from "./User"

export class Tweet {
    public author: User;
    public publishTime: Date;
    public data: string;
    public hashtags: Hashtag[];

    constructor(author: User, publishTime: Date, data: string, hashtags: Hashtag[] = []) {
        this.author = author;
        this.publishTime = publishTime;
        this.data = data;
        this.hashtags = hashtags;
    }
}