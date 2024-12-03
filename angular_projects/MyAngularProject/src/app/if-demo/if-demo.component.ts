import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student } from '../Student';
import { Order } from '../Order';

@Component({
  selector: 'app-if-demo',
  imports: [CommonModule],
  templateUrl: './if-demo.component.html',
  styleUrl: './if-demo.component.css'
})
export class IfDemoComponent {
  show: boolean = true
  message: string = "sample message"
  heading1: string = "this is heading 1"
  heading2: string = "this is heading 2"

  subjects: string[] = ["c", "rwd", "sql", "java"]

  students: Student[] = [new Student("s1", 123, [78, 67, 78, 89, 88]),
  new Student("s2", 124, [99, 55, 78, 89, 88]),
  new Student("s3", 125, [87, 54, 78, 89, 88]),
  new Student("s4", 126, [90, 78, 78, 89, 88]),
  new Student("s5", 127, [87, 98, 78, 89, 88])]

  orders: Order[] = [new Order(1, new Date(2024, 11, 2), "pending", "USA", "India"),
  new Order(2, new Date(2024, 10, 1), "delivered", "USA", "India"),
  new Order(3, new Date(2024, 11, 2), "on the way", "USA", "India"),
  new Order(4, new Date(2024, 9, 3), "pending", "USA", "India"),
  new Order(5, new Date(2024, 8, 5), "delivered", "USA", "India")]
}
