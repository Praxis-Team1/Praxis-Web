import { Injectable } from '@angular/core';
import { Student } from '../schemas/student';


@Injectable({
  providedIn: 'root',
})
export class helperService {

   public studentSignUp: Student;

   setStudentOfSignUp(student: Student){
      this.studentSignUp = student;
   }


   getStudentOfSignUp(): Student{
      return this.studentSignUp;
   }


}
