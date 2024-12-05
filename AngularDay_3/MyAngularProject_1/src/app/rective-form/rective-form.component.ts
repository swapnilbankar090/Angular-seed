import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rective-form',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './rective-form.component.html',
  styleUrl: './rective-form.component.css'
})
export class RectiveFormComponent {
  conatctForm = new FormGroup({
  firstname:new FormControl(),
  lastname:new FormControl(),
  email:new FormControl(),
  gender:new FormControl(),
  isMarried:new FormControl(),
  country:new FormControl()
 })
 onSubmit(){}
}
