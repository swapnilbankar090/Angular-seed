import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-deatils',
  imports: [],
  templateUrl: './emp-deatils.component.html',
  styleUrl: './emp-deatils.component.css'
})
export class EmpDeatilsComponent {
  employee = {
    code: 1,
    name: 'Swapnil Bankar',
    gender: 'Male',
    company: 'Accenture'
  };
}
