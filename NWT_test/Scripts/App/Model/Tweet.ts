export class Tweet {
    public name: string;
    public lastname: string;
    public nickname: string;
    public imageUrl: string;
    public publishTime: Date;
    public data: string;
    public hashtags: string[];

    constructor(name: string, lastname: string,nickname:string, imageUrl: string, publishTime: Date, data: string, hashtags: string[] = []) {
        this.name = name;
        this.lastname = lastname;
        this.nickname = nickname;
        this.imageUrl = imageUrl;
        this.publishTime = publishTime;
        this.data = data;
        this.hashtags = hashtags;
    }

    public getFullName(): string {
        return this.name + " " + this.lastname;
    }
}