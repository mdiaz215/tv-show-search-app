import { Component, Input } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { CommonModule} from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-show-details',
  standalone: true, //manually added, fixed error in imports below.
  imports: [CommonModule, MatCardModule],
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'] //updated because Angular expects array.
})
export class ShowDetailsComponent {
  @Input() current: IShowDetails = {
    showName: '', //updated fron name to showName
    yearStart: 'N/A', //updated from 0 to N/A
    yearEnd: 'N/A', //updated from 0 to N/A
    description: '',
    image: ''
  };
  
}