import { Injectable } from '@angular/core';
import { Student } from '../schemas/student';


@Injectable()
export class storageVideoService {

   public studentSignUp: Student;

   setStudentOfSignUp(student: Student){
      this.studentSignUp = student;
   }


   getStudentOfSignUp(): Student{
      return this.studentSignUp;
   }


}
