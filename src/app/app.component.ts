import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tv-show-search-app';
}
