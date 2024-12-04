import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customevent-child',
  imports: [],
  templateUrl: './customevent-child.component.html',
  styleUrl: './customevent-child.component.css'
})
export class CustomeventChildComponent {
  @Output () notify:EventEmitter<string> = new EventEmitter<string>();
  onClick():void{
    this.notify.emit('this is  from child custom Event');
  }

}
