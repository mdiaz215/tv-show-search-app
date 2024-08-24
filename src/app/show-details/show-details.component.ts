import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { DatePipe } from '@angular/common'
import { DetailsService } from '../details.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css',
  providers: [DatePipe]
})
export class ShowDetailsComponent {
  show: IShowDetails = {
    name: '',
    yearStart: 0,
    yearEnd: 0,
    description: '',
    image: '' 
  };
  error: string | null = null;

  constructor (private detailsService: DetailsService ) { //catch errors in HTTP request
    this.detailsService.getShowDetails('Girls').pipe( //message if error fetching data
      catchError(err => {
        this.error = 'Failed to load show details';
        return of(null); //return an observable to continue the flow
      })
    ).subscribe(data => {//runs if data is NOT null
      if (data) {  
      this.show = data;
      }
    });
  }
}
