import { Component, Input } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-details',
  standalone: true, //manually added
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'], //updated because Angular expects array.
  imports: [CommonModule]
})
export class ShowDetailsComponent {
  @Input() current: IShowDetails = {
    showName: '', //updated from name to showName
    yearStart: 'N/A', //updated from 0 to N/A
    yearEnd: 'N/A', //updated from 0 to N/A
    description: '',
    image: ''
  }; 
@Input() error: string | null = null;
}