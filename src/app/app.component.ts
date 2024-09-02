import { Component } from '@angular/core';
import { IShowDetails } from './ishow-details';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-search-app';

  showDetails: IShowDetails = { 
    showName: '', 
    yearStart: 'N/A',  // updated from 0 to 'N/A'
    yearEnd: 'N/A',    // updated from 0 to 'N/A'
    description: '',
    image: ''
  };

  searchInitiated: boolean = false; // Tracks search state

  constructor(private detailsService: DetailsService) {}

  doSearch(searchValue: string) {
    this.searchInitiated = true; //When search is initiated
    this.detailsService.getShowDetails(searchValue).subscribe(data => {
      this.showDetails = data; // Assign the fetched data to showDetails
    });
  }
}
