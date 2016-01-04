import {Component, View, EventEmitter} from "angular2/angular2"
import {Tweet as TweetModel} from "./../Model/Tweet"

@Component({
    selector: "search",
    outputs: ["searchData"]
})

@View({
    template:
    `
    <div class="input-group">
         <input type="text" class="form-control" placeholder="Search for..." #search (keyup)="updateSearchKey(search)"/>
         <span class="input-group-btn">
            <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search" /></button>
         </span>
    </div>
`
})

export class Search {
    public tweets: TweetModel[];
    private searchKey: string;
    private searchData: EventEmitter;

    constructor() {
        this.searchKey = "";
        this.searchData = new EventEmitter();
    }

    private updateSearchKey(input: HTMLInputElement): void {
        this.searchKey = input.value;
        this.searchData.next(this.searchKey);
    }
}