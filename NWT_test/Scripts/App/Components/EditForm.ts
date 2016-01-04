import {Component, View} from "angular2/angular2"

@Component({
    selector: "edit-form",
    inputs: ["inLabel", "inValue", "typeOfData"],
})

@View({
    template:
    `
        <div class="form-group">
            <label class="col-lg-3 control-label">{{inLabel}}</label>
            <div class="col-lg-8">
              <input class="form-control" type={{typeOfData}} value={{inValue}}>
            </div>
        </div>
`
})

export class EditForm {
    public inValue: string;
    public inLabel: string;
    public outValue: string;
    public typeOfData: string;
}