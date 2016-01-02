export class User {
    public name: string;
    public lastname: string;
    public nickname: string;
    public imageUrl: string;
    public numberTweets: number;
    public numberFollowing: number;

    constructor(name: string, lastname: string, nickname: string, imageUrl: string, numberTweets: number, numberFollowing: number) {
        this.name = name;
        this.lastname = lastname;
        this.nickname = nickname;
        this.imageUrl = imageUrl;
        this.numberTweets = numberTweets;
        this.numberFollowing = numberFollowing;
    }

    public getFullName(): string {
        return this.name + " " + this.lastname;
    }
}