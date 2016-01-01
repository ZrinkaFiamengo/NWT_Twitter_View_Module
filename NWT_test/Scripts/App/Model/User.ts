export class User {
    public name: string;
    public lastname: string;
    public nickname: string;
    public imageUrl: string;

    constructor(name: string, lastname: string, nickname: string, imageUrl: string) {
        this.name = name;
        this.lastname = lastname;
        this.nickname = nickname;
        this.imageUrl = imageUrl;
    }

    public getFullName(): string {
        return this.name + " " + this.lastname;
    }
}