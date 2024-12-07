import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatevalidate',
  imports: [FormsModule,CommonModule],
  templateUrl: './templatevalidate.component.html',
  styleUrl: './templatevalidate.component.css'
})
export class TemplatevalidateComponent {
  contact!:contact;
  constructor() {
    this.contact = {firstname:"",lastname:"",gender:"",email:"",};
   }
   onSubmit(contactForm:NgForm) {
    console.log('Form Submitted!', contactForm.value);
    if (contactForm.valid) {
      console.log('Form Submitted Successfully!', contactForm.value);
    } else {
      console.log('Form Invalid');
    }
  }

  
}
export class contact{
  firstname!:string;
  lastname!:string;
  gender!:string;
  email!:string
}
