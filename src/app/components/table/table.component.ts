import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ButtonEliminateComponent } from '../button-eliminate/button-eliminate.component';
import { ButtonModifyComponent } from '../button-modify/button-modify.component';
import { Employee } from '../../model/employee/employee.module';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CurrencyPipe } from '../../pipes/currency.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatDialogModule, ButtonModifyComponent, ButtonEliminateComponent, CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'position', 'department', 'salary', 'actions'];
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  openEditDialog(employee: Employee) {
    const dialogRef = this.dialog.open(ButtonModifyComponent, {
      data: { ...employee }
    });

    dialogRef.afterClosed().subscribe(updatedEmployee => {
      if (updatedEmployee) {
        this.employees = this.employees.map(e => (e.id === updatedEmployee.id ? updatedEmployee : e));
      }
    });
  }

  openDeleteDialog(employeeId: number) {
    const dialogRef = this.dialog.open(ButtonEliminateComponent, {
      data: employeeId
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeService.deleteEmployee(employeeId).subscribe(() => {
          this.employees = this.employees.filter(e => e.id !== employeeId);
        });
      }
    });
  }
}
