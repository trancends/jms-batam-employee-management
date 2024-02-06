import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Employee, data } from '../data';
import { Router, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIcon,
    RouterLink,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css',
})
export class ListEmployeeComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'username',
    'firstName',
    'lastName',
    'email',
    'group',
    'status',
    'actions',
    // 'birthDate',
    // 'basicSalary',
    // 'description',
  ];
  dataSource = new MatTableDataSource<Employee>(EMPLOYEE_DATA);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router,
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    const savedFilter = localStorage.getItem('employeeListFilter');
    if (savedFilter) {
      this.dataSource.filter = savedFilter.trim().toLowerCase();
    }
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  selectEmployee(employee: Employee) {
    let route = `/employee/detail/${employee.id}`;
    this.router.navigate([route]);
  }
  applyFilter(event: Event) {
    // applies filtering to all columns ('position', 'name', 'weight', 'symbol')
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    localStorage.setItem('employeeListFilter', filterValue);
  }
}

export const EMPLOYEE_DATA: Employee[] = data;
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
