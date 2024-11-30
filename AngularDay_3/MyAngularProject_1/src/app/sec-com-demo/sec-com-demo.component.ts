import { Component } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-sec-com-demo',
  imports: [],
  templateUrl: './sec-com-demo.component.html',
  styleUrl: './sec-com-demo.component.css'
})
export class SecComDemoComponent {
message:string="I created this second component today"
p1:Product=new Product(1,"catburry",688)
product = new Product(2, "Smartphone", 50000);
}
