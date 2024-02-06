import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Employee, data } from '../data';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css',
})
export class ListEmployeeComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<Employee>(EMPLOYEE_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const EMPLOYEE_DATA: Employee[] = data;
