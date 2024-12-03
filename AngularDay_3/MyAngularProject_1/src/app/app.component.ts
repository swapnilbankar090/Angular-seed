import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecComDemoComponent } from './sec-com-demo/sec-com-demo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstComponentComponent,SecComDemoComponent,PipedemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularProject_1';
}
