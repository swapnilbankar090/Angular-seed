import { Component, Input } from '@angular/core';
import { CourseDetails } from '../CourseDetails';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() course!: CourseDetails;
}
