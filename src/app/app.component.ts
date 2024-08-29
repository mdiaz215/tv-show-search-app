import { Component } from '@angular/core';
import { IShowDetails } from './ishow-details';
import { DetailsService } from './details.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tv-show-search-app';

  currentShow: IShowDetails = {
    showName: '', //updated from name to showName
    yearStart: 'N/A', 
    yearEnd: 'N/A', 
    description: '',
    image: ''
  };
  searchInitiated: boolean = false; // Tracks search state

  constructor(private detailsService: DetailsService){}

  doSearch(searchValue: string){
    this.searchInitiated = true; //when search is initiated
    this.detailsService.getShowDetails(searchValue)
    .subscribe(data => { //this runs if data is NOT null.
        this.currentShow = data;  
      });
  }
}
