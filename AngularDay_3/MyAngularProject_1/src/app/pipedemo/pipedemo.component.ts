import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../Product';
import { CountrycodePipe } from '../countrycode.pipe';

@Component({
  selector: 'app-pipedemo',
  imports: [CommonModule,CountrycodePipe],
  templateUrl: './pipedemo.component.html',
  styleUrl: './pipedemo.component.css'
})
export class PipedemoComponent {
  message:string="hello welcome"
  joinDate:Date=new Date(1999,5.4)
  p:Product=new Product(11,"swapnil",111)

  countryName:string="India"
}
