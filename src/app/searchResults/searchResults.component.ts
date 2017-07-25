import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'search-results',
  templateUrl: './searchResults.component.html',
  styleUrls: ['./searchResults.component.css']
})
export class SearchResultsComponent {
  public searchterm;
  onEnter()
  {
     console.log('called', this.searchterm);
  }
}
