import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
      
  }

  constructor(){}
  
  title = 'Booking_project';

  showNavbar: boolean = false;

  // Toggle the visibility of the navbar items
  showAll() {
    this.showNavbar = !this.showNavbar;
  }
}
