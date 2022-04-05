import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeDetailsService } from '../services/employeeDetails.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit {

    roles: any;
    employeeDetails: any;
	constructor(private employeeService: EmployeeService,
        private employeeDetailsService: EmployeDetailsService) {		
	}
    ngOnInit(): void {
        this.roles = this.employeeService.getRole()
    }

    loadEmployeeDetails = () => {
        this.employeeDetailsService.fetchEmployeeDetails()
                                    .subscribe((response:any)=>{
                                        this.employeeDetails = response.data;
                                    })
    }
 
}