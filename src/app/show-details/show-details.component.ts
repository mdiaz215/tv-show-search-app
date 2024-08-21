import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { DetailsService } from '../details.service';

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
  }

constructor(private detailsService: DetailsService){
  this.detailsService.getShowDetails('Friends').subscribe(data => this.current = data);
}

}
