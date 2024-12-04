import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { StudenDataComponent } from './studen-data/studen-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudenDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClassPractice';
}
