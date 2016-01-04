import {Pipe} from "angular2/angular2"
import {Tweet as TweetModel} from "./../Model/Tweet"
import {Hashtag as HashtagModel} from "./../Model/Hashtag"

@Pipe({
    name: "contains",
    pure: false
})
export class ContainsPipe {

    private hashtagsContainingKeyword: HashtagModel[];

    private checkHashtags(tweet: TweetModel, keyword: string): boolean {
        this.hashtagsContainingKeyword = [];
        tweet.hashtags.forEach(hashtag => {
            if (hashtag.data.toLowerCase().indexOf(keyword) != -1)
                this.hashtagsContainingKeyword.push(hashtag)
        });
        if (this.hashtagsContainingKeyword.length !=0)
            return true;
        return false;
    }

    transform(items: TweetModel[], [keyword]) {
        if (keyword == null || keyword.trim() == "") { return items; }
        keyword = keyword.toLowerCase();

        return items.filter(item => item.data.toLowerCase().indexOf(keyword) != -1
            || item.author.getFullName().toLowerCase().indexOf(keyword) != -1
            || item.author.nickname.toLowerCase().indexOf(keyword) != -1
            || item.publishTime.toDateString().toLowerCase().indexOf(keyword) != -1
            || this.checkHashtags(item, keyword)
        );
        }
}