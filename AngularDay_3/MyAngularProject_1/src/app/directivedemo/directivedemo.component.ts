import { Component } from '@angular/core';
import { CustomdirectiveDirective } from '../customdirective.directive';
import { PracticedirectiveDirective } from '../practicedirective.directive';

@Component({
  selector: 'app-directivedemo',
  imports: [CustomdirectiveDirective,PracticedirectiveDirective],
  templateUrl: './directivedemo.component.html',
  styleUrl: './directivedemo.component.css'
})
export class DirectivedemoComponent {

}
