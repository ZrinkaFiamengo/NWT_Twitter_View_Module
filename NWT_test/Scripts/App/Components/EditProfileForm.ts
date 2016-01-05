import {Component, View, EventEmitter} from "angular2/angular2"

@Component({
    selector: "edit-profile-form",
    inputs: ["inLabel", "inValue", "typeOfData"],
    outputs: ["outValue"]
})

@View({
    template:
    `
        <div class="form-group">
            <label class="col-lg-3 control-label">{{inLabel}}</label>
            <div class="col-lg-8">
              <input (change) = "onChangeValue(data)" #data class="form-control" type={{typeOfData}} value={{inValue}}>
            </div>
        </div>
`
})

export class EditProfileForm {
    public inValue: string;
    public inLabel: string;
    public outValue: EventEmitter;
    public typeOfData: string;

    constructor() {
        this.outValue = new EventEmitter();
    }

    onChangeValue(data: HTMLInputElement): void {
        this.outValue.next(data.value);
    }
}