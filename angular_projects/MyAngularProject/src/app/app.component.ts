import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import { IfDemoComponent } from './if-demo/if-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstComponentComponent,SecondComponent,IfDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularProject';
}
