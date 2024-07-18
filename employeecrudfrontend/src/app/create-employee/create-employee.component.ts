import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';   //.. first . is src second dote is app indicate
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {    //3) impl oninti nd quick fix it
      
      // Employee employee=new this.Employee(); in java object
         employee : Employee=new Employee();   //  1)in ts object
         

         //constructor create in ts file

         constructor(private employeeService : EmployeeService,private router : Router) //2)
         {
            
         }
  ngOnInit(): void
   {

   }

   //datawill take from html-> createEmployee -> employeeService -> springboot -> mysql5 emplooye inserted
  //           Listemp     <-    5 Listemp   <-  5 emplist 5 employee <-
  saveEmployee()
  {
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error =>console.log(error));
  }

  goToEmployeeList()
  {
    this.router.navigate(['/employees'])

  }

  onSubmit()
  {
    console.log(this.employee);
    this.saveEmployee();
  }
    }
