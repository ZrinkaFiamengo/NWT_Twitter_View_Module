import {Pipe} from "angular2/angular2"
import {User as UserModel} from "./../Model/User"

@Pipe({
    name: "containsuser",
    pure: false
})
export class ContainsPipeUsers {
    transform(items: UserModel[], [keyword]) {
        if (keyword == null || keyword.trim() == "") { return items; }
        keyword = keyword.toLowerCase();

        return items.filter(item =>item.getFullName().toLowerCase().indexOf(keyword) != -1
            || item.nickname.toLowerCase().indexOf(keyword) != -1
        );
    }
}