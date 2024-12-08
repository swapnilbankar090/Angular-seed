import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivevalidate',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './reactivevalidate.component.html',
  styleUrl: './reactivevalidate.component.css'
})
export class ReactivevalidateComponent {
  contactForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+$')
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+$')
    ]),
    gender: new FormControl('', [Validators.required])
  });

  isSubmitted = false; // Track form submission

  // Method to handle form submission
  onSubmit() {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // Getters for easier access in template
  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get gender() {
    return this.contactForm.get('gender');
  }
}