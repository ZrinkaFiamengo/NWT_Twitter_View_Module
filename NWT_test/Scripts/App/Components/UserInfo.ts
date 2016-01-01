﻿import {Component, View} from "angular2/angular2"

@Component({
    selector: "user-info"
})

@View({
    template:
    `
        <div class="panel panel-default user-panel">
    <img src="/Content/Users/User1.png" id="user-panel-user-image" alt="user picture" />
    <a class="hidden-xs" src="#"> <label id="user-panel-user-name">Ime Prezime</label><br /></a>
    <a class="hidden-xs" src="#"> <span id="user-panel-nickname">@@Nickname</span><br /></a>
    <ul class="hidden-xs nav navbar-nav">
        <li class="user-container-info">
            TWEETS <br />
            <label>5</label>
        </li>
        <li class="user-container-info">
            FOLLOWING<br />
            <label>20</label>
        </li>
    </ul>
</div>
`
})

export class UserInfo {

    constructor() {
    }
}