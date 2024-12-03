import { Component } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  products:Product[] = [new Product(10,"p1",23), new Product(11,"p2",34), new Product(12,"p3",23)]
}
