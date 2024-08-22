import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { ShowdetailsService } from '../showdetails.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'],
  standalone: true,
  imports: [CommonModule]  // Import CommonModule here
})
export class ShowDetailsComponent implements OnInit {
  current: IShowDetails = {
    name: 'Loading...',
    premiered: new Date(),
    ended: null,
    summary: 'Fetching details...',
    image: 'https://via.placeholder.com/150'
  };
  error: string | null = null;

  constructor(private showdetails: ShowdetailsService) {}

  ngOnInit() {
    this.getShowDetails('Friends'); // Fetch details for 'Friends' TV show
  }

  getShowDetails(name: string): void {
    this.showdetails.getShowDetails(name).subscribe(
      data => {
        this.current = data;
        if (!data || !data.name) {
          this.error = 'No show details found';
        }
      },
      error => {
        console.error('Error:', error);
        this.error = 'Error fetching show details';
      }
    );
  }
}

