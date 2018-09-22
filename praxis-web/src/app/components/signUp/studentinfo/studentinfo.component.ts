import { Component, OnInit , ViewChild,} from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { Student } from '../../../schemas/student';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {

  private verificationPass: string;

  private student;

  constructor(private router: Router) {
    this.student = new Student();
  }

  ngOnInit() {
  }

  goToNextStep(){
    console.log(this.student);

    this.router.navigate(['student/signUp/step2'], { queryParams: { student: this.student }}).then(
        data=>{
          console.log("Data ", data);
        },
        error=>{
          console.log("El error es " , error);
        }
    );
  }

}
