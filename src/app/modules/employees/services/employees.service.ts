import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(public http:HttpClient) { }

  public getEmployeeService(callback){
    /*this.http.get('http://localhost:8085/employees')
    .subscribe(
        (data) => {    
          console.log(data);        
            callback(data);
        }
    );*/ 
}

public getSpanEmployeeService(callback){
  this.http.get('https://hemasculpts.herokuapp.com/api/getdata')
  .subscribe(
      (data) => {     
          callback(data);
      }
  );
}

public postSpanEmployeeService(callback,span){
  console.log(span);
  //var body = "name=" + span.name + "&value=" + span.value;
  //console.log(body);
  this.http.post("https://hemasculpts.herokuapp.com/api/postdata", span).subscribe((data) => {callback(data)});
}

public putSpanEmployeeService(callback,span){
  console.log(span);
  var obj = {
    table: []
 };
 obj.table.push(span);
  //var body = "name=" + span.name + "&value=" + span.value;
  //console.log(body);
  this.http.put("https://hemasculpts.herokuapp.com/api/putdata", obj).subscribe((data) => {callback(data)});
}

postAPIData(data){
  return this.http.post('https://hemasculpts.herokuapp.com/api/postdata', data);
}
  }

