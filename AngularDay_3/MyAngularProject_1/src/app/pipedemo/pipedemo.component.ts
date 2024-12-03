import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  imports: [CommonModule],
  templateUrl: './pipedemo.component.html',
  styleUrl: './pipedemo.component.css'
})
export class PipedemoComponent {
  message:string="hello welcome"
  joinDate:Date=new Date(1999,5.4)
}
