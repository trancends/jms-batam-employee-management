import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'employee',
    component: ListEmployeeComponent,
  },
  {
    path: 'employee/detail/:id',
    component: DetailComponent,
  },
];
