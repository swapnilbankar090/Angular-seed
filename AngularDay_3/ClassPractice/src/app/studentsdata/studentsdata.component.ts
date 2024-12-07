import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudsService } from '../studs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentsdata',
  imports: [CommonModule],
  templateUrl: './studentsdata.component.html',
  styleUrl: './studentsdata.component.css'
})
export class StudentsdataComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentsService: StudsService) {}

  ngOnInit(): void {
    this.students = this.studentsService.getStudents();
  }

  displayStudent(student: Student): string {
    return `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}, Email: ${student.email}`;
  }

}
