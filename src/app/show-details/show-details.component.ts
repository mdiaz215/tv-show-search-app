import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { DatePipe } from '@angular/common'
import { DetailsService } from '../details.service';

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
  constructor (private detailsService: DetailsService ) {
    this.detailsService.getShowDetails('Girls').subscribe(data => this.show = data);
  }
}
