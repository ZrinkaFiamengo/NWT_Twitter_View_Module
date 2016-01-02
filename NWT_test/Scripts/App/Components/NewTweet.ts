import {Component, View, EventEmitter} from "angular2/angular2"

@Component({
    selector: "new-tweet",
    outputs: ["publish"]
})

@View({
    template: `<div class="well new-tweet-window">
            <form class="form-horizontal" role="form">
                <div class="form-group" style="padding:14px;">
                    <img src="/Content/Users/User1.png" class="user-image img-from-new-tweet-window" alt="user picture" />
                    <input class="form-control input-from-new-tweet-window" placeholder="What's happening?" #input (keyup)="newTweetUpdate(input)">
                </div>
                <button class="btn btn-success pull-right" type="button" (click)="onPublish(input)">Post</button>
                <span class="pull-right number-from-new-tweet-window">{{numberOfSymbols}}</span>
                <ul class="list-inline new-tweet-list">
                    <li><a href="#"><i class="glyphicon glyphicon-facetime-video"></i>  Media</a></li>
                    <li><a href="#"><i class="glyphicon glyphicon-map-marker"></i>  Location</a></li>
                    <li><a href="#"><i class="glyphicon glyphicon-adjust"></i> Poll</a></li>
                </ul>
            </form>
        </div>
                  `
})

export class NewTweet {
    private numberOfSymbols: number;
    public publish: EventEmitter;

    constructor() {
        this.numberOfSymbols = 140;
        this.publish = new EventEmitter();
    }

    private newTweetUpdate(input: HTMLInputElement): void {
        this.numberOfSymbols = 140 - input.value.length;
        if (input.value.length > 140)
            input.setAttribute("style", "background-color: #FFCCCC;");
        else if (input.value.length > 130)
            input.setAttribute("style", "background-color: #FFFCCC;");
        else
            input.setAttribute("style", "background-color: none;");
    }

    private onPublish(input: HTMLInputElement): void {
        var value = input.value.trim();
        if (value == "") { return; }

        if (value.length > 140) {
            return;
        }

        this.publish.next(value);

        input.value = "";
        this.numberOfSymbols = 140;
    }
}

