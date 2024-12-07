import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudsService {
  private students: Student[] = [
    new Student(1, 'Swapnil Bankar', 20, 'A', 'swapnilbankr@gmail.com'),
    new Student(2, 'yas', 22, 'B', 'jane@example.com'),
    new Student(3, 'Mike Johnson', 19, 'A', 'mike@example.com'),
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }
}
