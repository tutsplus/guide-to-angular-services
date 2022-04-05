import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  role = [
    {'id':'1', 'type':'admin'},
    {'id':'2', 'type':'engineer'},
    {'id':'3', 'type':'sales'},
    {'id':'4', 'type':'human_resources'}
  ]
	getRole(){
    return this.role;
  }
}