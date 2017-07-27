import {Injectable} from "@angular/core";
import {SearchResult} from "../models/SearchResult";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SearchResultsService {

    private _array: Array<SearchResult>;
    private _searchResults:  BehaviorSubject<Array<SearchResult>>;

    // ctor
    constructor() {                         //   private http: Http   can be injected here
        this._array = new Array<SearchResult>();  //   initialize list head
        this._searchResults = new BehaviorSubject<Array<SearchResult>>(this._array);  // wrap in a BehaviorSubject, subclass to Observable
    };

    // public member
    public get searchResults()
    {
       return this._searchResults.asObservable();
    }

    // initial load (sample) data
    loadData() {
        this._array.push( new SearchResult({ title: "Marty Mazurik | LinkedIn", 
                                            titleurl: "/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjO4vqk_ZDVAhVU4mMKHVYmCzIQFggoMAA&amp;url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmartymazurik&amp;usg=AFQjCNGX5tGzxXBp_PtiAFXH-qiyMFqa_Q",
                                            titledatahref: "https://www.linkedin.com/in/martymazurik",
                                            cite: "https://www.linkedin.com/in/martymazurik",
                                            descr: "<em>Marty Mazurik</em> is on Facebook. Join Facebook to connect with <em>Marty Mazurik</em> and others you may know. Facebook gives people the power to share and makes&nbsp;..."
                                        }) );
        this._array.push( new SearchResult({ title: "Marty Mazurik | Facebook", 
                                            titleurl: "/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=2&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjO4vqk_ZDVAhVU4mMKHVYmCzIQFgguMAE&amp;url=https%3A%2F%2Fwww.facebook.com%2Fmarty.mazurik&amp;usg=AFQjCNGocLDGl7J905scRSEXcZqTNHq6Ow",
                                            titledatahref: "https://www.facebook.com/marty.mazurik",
                                            cite: "https://www.facebook.com/marty.mazurik",
                                            descr: "<em>Marty Mazurik</em> is on Facebook. Join Facebook to connect with <em>Marty Mazurik</em> and others you may know. Facebook gives people the power to share and makes&nbsp;..."
                                        }) );
        this._array.push( new SearchResult({ title: "marty mazurik (@martymazurik) | Twitter", 
                                            titleurl: "/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjO4vqk_ZDVAhVU4mMKHVYmCzIQFggoMAA&amp;url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmartymazurik&amp;usg=AFQjCNGX5tGzxXBp_PtiAFXH-qiyMFqa_Q",
                                            titledatahref: "https://twitter.com/martymazurik",
                                            cite: "https://twitter.com/martymazurik",
                                            descr: "The latest Tweets from <em>marty mazurik</em> (@martymazurik). Diverse and talented tech guy, with cooking and real estate skills. Portland, Ore."
                                        }) );
                                        





        this._searchResults.next(this._array);                                            
    }
   
}

