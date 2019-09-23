import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../model/data-model';
import { Span } from '../model/data-model';
import { HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  private employees:Employee[];
  private span:Span[];
  private fileType:String;
  private filePath:String;
  private isAdmin:Boolean;
  private zoom:String;
  
  constructor(public employeeService:EmployeesService) { }
  
  
  ngOnInit() {
    console.log("calling service"); 
    this.fileType=".jpg";
    this.filePath="/assets/images/"   
   /*this.employeeService.getEmployeeService((employees)=>{
     console.log(employees);
     this.employees=employees});*/

     this.employeeService.getSpanEmployeeService((span)=>{
      console.log(span);
      this.span=span;
     });

     //getParamValueQueryString( paramName ) {
      const url = window.location.href;
      let paramValue;
      if (url.includes('?')) {
        const httpParams = new HttpParams({ fromString: url.split('?')[1] });
        console.log(httpParams);
        paramValue = httpParams.get("admin");
        if(paramValue)
        {
          this.isAdmin = true;
          console.log("admin");
          this.zoom="col-md-6 col-lg-4 item";
          console.log(this.isAdmin);
        }
      }
      else{
        console.log("not a admin");
          this.zoom="col-md-6 col-lg-4 item zoom-on-hover";
      }
      //return paramValue;
    //}

   }

   /*save(){
     console.log('initiate save');
     this.employeeService.postAPIData().subscribe((response)=>{
      console.log('response from POST API is ', response);
    },(error)=>{
      console.log('error during post is ', error)
    });
   }*/

   save(value){
    this.employeeService.postSpanEmployeeService((value)=>{
      
     },value);
   }

   

   get filterBySouth() {
     if(this.span!=undefined)
     {
      return this.span.filter( x => x.name.includes('SOUTH'));
     }
  }

  get filterByNorth() {
    if(this.span!=undefined)
    {
     return this.span.filter( x => x.name.includes('NORTH'));
    }
 }

 get filterByFashion() {
  if(this.span!=undefined)
  {
   return this.span.filter( x => x.name.includes('FASHION'));
  }
}
 
  }
  


