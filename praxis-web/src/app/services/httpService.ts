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



}
