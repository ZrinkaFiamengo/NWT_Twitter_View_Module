import {Component, View, NgFor} from "angular2/angular2"
import {Hashtag as HashtagModel} from "./../Model/Hashtag"

@Component({
    selector: "trends",
    inputs: ["hashtags"]
})

@View({
    directives: [NgFor],
    template:
    `<div class="panel panel-default hidden-xs ">
    <label id="trends-label">Trends</label>
    <ul id="trends-list" *ng-for="#hashtag of hashtags">
                <li>{{hashtag.data}}</li>
    </ul>
    </div>`
})

export class Trends {
    public hashtags: HashtagModel[]; 
}