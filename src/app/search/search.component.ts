import { Component, EventEmitter, Output, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('')

  constructor(){
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(searchValue => {
      console.log("Search value is ", searchValue);
      if (!this.search.invalid)

        this.searchEvent.emit(searchValue??undefined)
    }
  )
  }
}
