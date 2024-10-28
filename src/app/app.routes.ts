import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [ 
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'table', component: TableComponent }
];
