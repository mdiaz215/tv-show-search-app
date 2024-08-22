import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { DetailsService } from '../details.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'] //updated because Angular expects array.
})
export class ShowDetailsComponent {
  current: IShowDetails = {
    showName: '', //updated fron name to showName
    yearStart: 0, 
    yearEnd: 0, 
    description: '',
    image: ''
  };
  error: string | null = null;

  constructor(private detailsService: DetailsService) { //will catch errors in the HTTP request. 
    this.detailsService.getShowDetails('Friends').pipe(
      catchError(err => {
        this.error = 'Failed to load show details'; //this message will display if there is an error in fetching the data.
        return of(null); // Return an observable to continue the flow
      })
    ).subscribe(data => { //this runs if data is NOT null.
      if (data) {
        this.current = data;
      }
    });
  }
}