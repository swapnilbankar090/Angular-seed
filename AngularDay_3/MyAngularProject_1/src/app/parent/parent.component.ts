import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  tech:string="";
  type:string="";
  constructor() {
    this.tech="Angular";
    this.type="Frontend Framework";
   }
}
