import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Employee, data } from '../data';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MatButton, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  employee!: Employee;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id']; // Get the employee id from the route parameters
      this.employee = data.find((emp) => emp.id === id)!; // Find the employee with the matching id
    });
  }
}
