import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Employee, group, data } from '../data';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    RouterLink,
    MatButton,
    MatIcon,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  group = group;
  employeeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['active', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = {
        id: uuidv4(),
        ...this.employeeForm.value,
      };
      data.push(newEmployee);
      this._snackBar.open('Employee added successfully', 'Close', {
        duration: 3000,
      });
      console.log('New employee added:', newEmployee);
      this.employeeForm.reset();
    }
  }
}
