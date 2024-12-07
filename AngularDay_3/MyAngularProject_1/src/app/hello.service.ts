import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {


  public SayHello() {
    return "Hello services called by swapnil"
  }
  constructor() { }
}
