import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-show-search',
  standalone: true,
  templateUrl: './show-search.component.html',
  styleUrl: './show-search.component.css',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowSearchComponent {
  search = new FormControl('') 

  constructor(){ //notifies as soon as value changes in the box
    this.search.valueChanges.subscribe(
      searchValue => {
        console.log(searchValue)
      }
    )
  }
}
