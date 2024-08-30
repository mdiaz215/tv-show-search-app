import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { ShowdetailsService } from '../showdetails.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-details',
  standalone: true,
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'], //updated because Angular expects array.
  imports: [CommonModule]
})
export class ShowDetailsComponent {
  current: IShowDetails = {
    name: '', //updated fron name to showName
    premiered:0,
    ended:0,
    summary: '',
    image: ''
  };
  error: string | null = null;

  constructor(private detailsService: ShowdetailsService) { //will catch errors in the HTTP request. 
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
