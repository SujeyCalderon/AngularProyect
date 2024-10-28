import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee/employee.module';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-modify',
  templateUrl: './button-modify.component.html',
  styleUrls: ['./button-modify.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class ButtonModifyComponent {
  constructor(
    public dialogRef: MatDialogRef<ButtonModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee,
    private employeeService: EmployeeService
  ) {}

  onSave(form: NgForm) {
    if (form.valid) {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
        this.dialogRef.close(this.employee); // Cierra y envía el empleado actualizado
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
