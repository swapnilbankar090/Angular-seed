import { Component } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-test-hello',
  imports: [],
  templateUrl: './test-hello.component.html',
  styleUrl: './test-hello.component.css'
})
export class TestHelloComponent {
  msg!:string
  constructor(hs:HelloService) {
    this.msg = hs.SayHello()
    
  }

}
