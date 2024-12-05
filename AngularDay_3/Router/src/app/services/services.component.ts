import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  // function 
  constructor(private router1: Router) { }
  gocontacts() {
    this.router1.navigate(['/contact']);
  }

}
