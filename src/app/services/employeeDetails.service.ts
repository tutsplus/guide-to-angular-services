import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class EmployeDetailsService {

    fetchEmployeeDetailsURL = 'https://reqres.in/api/users?page=2'
    constructor(private http: HttpClient) { }
    fetchEmployeeDetails = () => {
        return this.http.get(this.fetchEmployeeDetailsURL);
    }

}