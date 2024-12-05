import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule ,NgForm,} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [CommonModule, FormsModule,],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  contact!: contact;
  constructor() {
    this.contact = {
      firstname: "",
      lastname: "",
      gender: "male",
      isToc: true,
      email: ""
    }
  }
    onSubmit(custform:NgForm){}
  }
export class contact {
  firstname!: string;
  lastname!: string;
  gender!: string;
  isToc!: boolean;
  email!: string;
}


