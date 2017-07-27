import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResultsService } from '../services/search.service';
import { Subscription } from 'rxjs/Subscription';
import {SearchResult} from "../models/SearchResult";

@Component({
  selector: 'search-results',
  templateUrl: './searchResults.component.html',
  styleUrls: ['./searchResults.component.css'],
  providers: [SearchResultsService]
})
export class SearchResultsComponent {
  public searchterm;
  searchResults : Array<SearchResult>;
  subscription : Subscription;

  constructor(private searchResultsService: SearchResultsService) // inject our service at the app level
  {
  }

  onEnter()
  {
    this.searchResultsService.loadData();
    this.subscription = this.searchResultsService.searchResults.subscribe( sr => { this.searchResults = sr; });

    console.log('called', this.searchterm);
  }
}
