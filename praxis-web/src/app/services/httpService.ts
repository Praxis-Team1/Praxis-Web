import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class httpService {


  private url: string = "https://praxischallenge.herokuapp.com/user";


  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  };

  constructor(public http: HttpClient) {

  }


  getMessage() {
    return this.http.get(this.url);
  }


  /*Aqui debeberia ir la peticion para hacer el login, pero pondremos algo de prueba*/
  /*Se simula el backend */

  login(email: String, password: String): boolean{
        if(email== "test@unal.edu.co" && password == "test"){
              return true;
        }
  }

}
