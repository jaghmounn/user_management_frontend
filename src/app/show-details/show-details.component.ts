import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {


  
  id: number
  employee!: Employee
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { 

    this.id=0
  }

  ngOnInit(): void {
    // Get the employee ID from the route
    this.id = +this.route.snapshot.params['id']; // The '+' converts the string to a number

    // Fetch the employee data using the service
    this.employeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data; // Assign the fetched data to the employee object
      console.log('Employee details:', this.employee);
    });
  }


}
