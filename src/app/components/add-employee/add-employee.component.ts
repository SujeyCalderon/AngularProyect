import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee/employee.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,  // Indica que es un componente independiente
  imports: [FormsModule], 
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  employee: Employee = {
    id: 0,
    name: '',
    position: '',
    department: '',
    salary: ''
  };

  constructor(private employeeService: EmployeeService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.employeeService.createEmployee(this.employee).subscribe({
        next: response => {
          console.log('Empleado agregado:', response);
          form.resetForm(); // Resetea el formulario después de enviar
        },
        error: error => {
          console.error('Error al agregar el empleado:', error);
        }
      });
    }
  }
}
