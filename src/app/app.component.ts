import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  template: `
    <app-header />
    <h1>Hello, {{ title }}</h1>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'employee-management';
}
