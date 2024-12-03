import { Component } from '@angular/core';
import { Product } from '../Product';
import { CommonModule } from '@angular/common';
import { WorkShop } from '../WorkShop';

@Component({
  selector: 'app-second',
  imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  message:string = "this is a message"
  p1:Product = new Product(11,"sdf",1233)
  changeColor:string = "red"
  txt:string = "Enter text"
  workshops:WorkShop[] = [new WorkShop("Python","DS",8500,0,80),
                          new WorkShop("PHP","PHP-Zend",9000,2300,45),
                          new WorkShop("AWS","Cloud",24000,4000,50),
                          new WorkShop("Angular","SPA Frameworks",15500,0,40),
                          new WorkShop("ReactJS","frontend",17000,5500,35),
                          new WorkShop("Jira","Dev Tools",35000,0,40)]
}
