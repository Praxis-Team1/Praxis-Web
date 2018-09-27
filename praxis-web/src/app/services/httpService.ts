import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../schemas/student';
import { environment } from '../../environments/environment';

import {Observable} from 'rxjs/Rx';
@Injectable()
export class httpService {


  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  };


  static httpOptionsToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " +  localStorage.getItem('token')
    })

  };

  constructor(public http: HttpClient) {

  }

  getMessage() {
    return this.http.get(environment.urlserver);
  }

  /*Aqui debeberia ir la peticion para hacer el login, pero pondremos algo de prueba*/
  /*Se simula el backend */

  login(email: string, password: string) {
        return this.http.post<any>(`${environment.urlserver}/auth`, { email, password });
  }

  signUp(student: Student){
    return this.http.post<Student>(environment.urlserver+"/students",
      JSON.stringify(student), httpService.httpOptions);
  }



  getSessions() {

    const headers = new Headers({
     'Content-Type': 'application/json',
     'Authorization': localStorage.getItem('token')
   });


   return this.http.get(`${environment.urlserver}/session`, httpService.httpOptionsToken);


  }

  getStudentsForReview(){

    return this.http.get(`${environment.urlserver}/students/review`, httpService.httpOptionsToken);
  }

  AcceptOrRejectStudent(userid: number,veredict: boolean){

    ///students/admissionResult/:id/:result

    console.log("user id ", userid);
    console.log("veredict ", veredict);
    return this.http.get(`${environment.urlserver}/students/admissionResult/${userid}/${veredict}`, httpService.httpOptionsToken);
  }
}
