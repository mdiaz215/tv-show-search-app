import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-search',
  standalone: true, // manually added, fixed error in imports below
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent {
 @Output() searchEvent = new EventEmitter<string>();
 search = new FormControl('', [Validators.minLength(2)])

 constructor(){
  this.search.valueChanges.pipe(debounceTime(1000)).subscribe(searchValue => {
    if (!this.search.invalid) 
    this.searchEvent.emit(searchValue ?? undefined);
   }
  )
 }
}
