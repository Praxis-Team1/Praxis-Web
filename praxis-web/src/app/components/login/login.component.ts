import { Component, OnInit , ViewChild} from '@angular/core';
import { httpService } from '../../services/httpService';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';
import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';
import { generalService } from '../../services/generalService';
import { helperService } from '../../services/helperService';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  //Debe haber un token.
  private emailPattern: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  public rForm: FormGroup;

  constructor(public http: httpService, public router: Router,public formBuilder: FormBuilder,
    private bootstrapAlertService: BootstrapAlertService, private helperService: helperService,
     public generalService: generalService) {

       this.generalService.statusNavBarInicial = false;
       this.generalService.statusNavBarMenuStudent = true;


      this.http.getMessage().subscribe((data) => {

         console.log(data);
      });

    this.rForm = formBuilder.group({
       "email":["", [Validators.required, Validators.pattern(this.emailPattern)]],
       "password": ["", Validators.required]
     });
   }
  ngOnInit() {

  }

  submit(){

    if(this.rForm.valid){

         this.http.login(this.email, this.password).subscribe((data) => {
            console.log("entro 1 " , data);
            let dataJson = JSON.parse(JSON.stringify(data));

            let token = dataJson.token;

            localStorage.setItem("token", token);

            this.generalService.setstatusNavBarInicial(true);
            this.generalService.setstatusNavBarMenuStudent(false);
            this.bootstrapAlertService.showSucccess(`Welcome to PSL - PRAXIS ${this.email}`);
            this.router.navigate(['admin/admissions']);

         },
         (error) => {

            console.log("entro 2 " ,error);
         }
       )
    }

  }

}
