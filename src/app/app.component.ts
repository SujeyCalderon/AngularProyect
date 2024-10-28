import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee/employee.module';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = "Gestión de empleados";
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService){}
  
  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      console.log(data)
    });
  }
}
