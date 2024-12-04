import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomePipe } from '../welcome.pipe';
import { PowerPipe } from '../power.pipe';

@Component({
  selector: 'app-studen-data',
  imports: [CommonModule,WelcomePipe,PowerPipe],
  templateUrl: './studen-data.component.html',
  styleUrl: './studen-data.component.css'
})
export class StudenDataComponent {
  students = [
    {
      regNo: 1,
      fullName: 'Swapnil',
      birthDate: new Date('2000-01-15'),
      gender: 'male',
      degree: 'MCA',
      percentage: 85.456
    },
    {
      regNo: 2,
      fullName: 'Shweta Jadhav',
      birthDate: new Date('1999-12-10'),
      gender: 'female',
      degree: 'B.TECH',
      percentage: 90.125
    }]
}
