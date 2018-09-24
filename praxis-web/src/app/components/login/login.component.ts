import { Component, OnInit } from '@angular/core';
import { httpService } from '../../services/httpService';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';
import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: String;
  public password: String;

  //Debe haber un token.
  private emailPattern: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  public rForm: FormGroup;

  constructor(public http: httpService, public router: Router,public formBuilder: FormBuilder, private bootstrapAlertService: BootstrapAlertService) {

    this.rForm = formBuilder.group({
       "email":["", [Validators.required, Validators.pattern(this.emailPattern)]],
       "password": ["", Validators.required]
     });
   }
  ngOnInit() {

  }

  submit(){

    if(this.rForm.valid){

         let res: boolean;
         res = this.http.login(this.email, this.password);

         if(res){
              this.bootstrapAlertService.showSucccess(`Welcome to PSL - PRAXIS ${this.email}`);

         }

    }

  }

}
