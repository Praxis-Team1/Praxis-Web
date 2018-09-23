import { Component, OnInit , ViewChild,} from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { Student } from '../../../schemas/student';
import { helperService } from '../../../services/helperService';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';
import { httpService } from '../../../services/httpService';
import { PasswordValidator  } from './passwordValidator';
import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {

  private verificationPass: string;
  private rForm: FormGroup;
  private student;



  private emailPattern: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

//
  constructor(private router: Router, private helperService: helperService,private formBuilder: FormBuilder, private http: httpService, private bootstrapAlertService: BootstrapAlertService) {

    this.student = this.helperService.getStudentOfSignUp();

    this.http.getMessage().subscribe((data)=> {
      console.log(data);
    },
     (error) => {

        console.log(error);
     }
    );


     this.rForm = formBuilder.group({
        "name": ["", Validators.required],
        "email":["", [Validators.required, Validators.pattern(this.emailPattern)]],
        "document": ["", Validators.required],
        "semester": ["", [Validators.required, Validators.max(20)]],
        "password": ["", Validators.required],
        "cpassword": ["", Validators.required],
        "date": ["", Validators.required],
        "biography": ["", Validators.required],
        "university": ["", Validators.required],
        "documentType": ["", Validators.required],
        "praxistype": ["", Validators.required]
      },
      {

         validator: PasswordValidator.MatchPassword
      }
   );




  }

  ngOnInit() {
  }

  goToNextStep(){
    //console.log(this.student);

    //Es necesario los validators.

    this.helperService.setStudentOfSignUp(this.student);


    if(!this.rForm.valid){
       this.bootstrapAlertService.showError('You have to fill all the information in the form');
    }else{

        this.router.navigate(['student/signUp/step2']).then(
           data=>{
             console.log("Data ", data);
           },
           error=>{
             console.log("El error es " , error);
           }
       );



    }


  }

}
