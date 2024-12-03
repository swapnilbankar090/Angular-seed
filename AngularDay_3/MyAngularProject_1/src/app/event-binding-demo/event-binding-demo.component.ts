import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  imports: [],
  templateUrl: './event-binding-demo.component.html',
  styleUrl: './event-binding-demo.component.css'
})
export class EventBindingDemoComponent {

  result:string=""
  x:string=""
  DisplayMessage(){
    this.result='Oh !!!! You  actually me ...!!!!!!!'
  }

  DisplayDetails(pName:string,lName:string){
    this.x="your Details are "+pName+" "+lName+ "......!!!!!!!!!!!!"
  }

  var1="intial value"
  handeInput(event:any){
    this.var1=(event.target as HTMLInputElement).value
  }
}

