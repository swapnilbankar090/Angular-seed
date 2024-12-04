import { Component } from '@angular/core';
import { CustomeventChildComponent } from '../customevent-child/customevent-child.component';

@Component({
  standalone:true,
  selector: 'app-customeventparent',
  imports: [CustomeventChildComponent],
  templateUrl: './customeventparent.component.html',
  styleUrl: './customeventparent.component.css'
})
export class CustomeventparentComponent {
msg:string="";
onNotify(message:string):void{
  this.msg+='I am actually.........'+message;
}
}
