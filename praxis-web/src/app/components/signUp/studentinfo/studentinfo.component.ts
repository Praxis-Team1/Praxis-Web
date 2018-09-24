import { Component, OnInit , ViewChild,} from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { Student } from '../../../schemas/student';
import { helperService } from '../../../services/helperService';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormBuilder  } from '@angular/forms';



@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {
  private verificationPass: string;
  text = 'Sign up page';
  submitted = false;
  form: FormGroup;
  private student;

  constructor(private router: Router, private helperService: helperService) {
    this.student = new Student();
  }

  ngOnInit() {
  }

  goToNextStep(){
    this.submitted = true;
    //console.log(this.student);

    //Es necesario los validators.

    this.helperService.setStudentOfSignUp(this.student);

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
