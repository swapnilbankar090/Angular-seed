import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecComDemoComponent } from './sec-com-demo/sec-com-demo.component';

import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { ParentComponent } from './parent/parent.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { CustomeventparentComponent } from './customeventparent/customeventparent.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { RectiveFormComponent } from './rective-form/rective-form.component';
//EventBindingDemoComponent,ParentComponent,DirectivedemoComponent,CustomeventparentComponent,

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TemplateDrivenComponent,RectiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularProject_1';
}
