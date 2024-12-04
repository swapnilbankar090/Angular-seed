import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() technology!:string; //technology:string=""
  @Input() techtype!: string;
  constructor(){
    console.log(this.technology);
    console.log(this.techtype); 
  }
}
