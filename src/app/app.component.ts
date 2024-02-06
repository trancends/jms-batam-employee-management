import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, ListEmployeeComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: `

`,
})
export class AppComponent {
  title = 'employee-management';
}
