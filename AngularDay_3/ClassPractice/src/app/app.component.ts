import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { StudenDataComponent } from './studen-data/studen-data.component';
import { EmpDeatilsComponent } from './emp-deatils/emp-deatils.component';
import { ParentComponent } from './parent/parent.component';
import { StudentsdataComponent } from './studentsdata/studentsdata.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudenDataComponent,EmpDeatilsComponent,ParentComponent,StudentsdataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClassPractice';
}
