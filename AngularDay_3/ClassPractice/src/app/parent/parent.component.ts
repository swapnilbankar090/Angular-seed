import { Component } from '@angular/core';
import { CourseDetails } from '../CourseDetails';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  course = new CourseDetails('Full Stack Development','MERN', 50000,'6 months');
}
