import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl,Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-show-search',
  standalone: true,
  templateUrl: './show-search.component.html',
  styleUrl: './show-search.component.css',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowSearchComponent {
  @Output() searchEvent = new EventEmitter<string>(); //output of data will happen when event happens
  search = new FormControl('', [Validators.minLength(2)]) 

  constructor(){ //notifies as soon as value changes in the box
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(searchValue => {
        if (!this.search.invalid)
          this.searchEvent.emit(searchValue??undefined) //value emitted after the validation happens. checks if value is null with ?? => Undefined
      }    
    )
  }
}
