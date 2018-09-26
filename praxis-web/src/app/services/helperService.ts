import { Injectable } from '@angular/core';
import { Student } from '../schemas/student';


@Injectable()
export class helperService {

   public studentSignUp: Student= new Student();
   public step: number=1;

   setStudentOfSignUp(student: Student){
      this.studentSignUp = student;
   }


   getStudentOfSignUp(): Student{
      return this.studentSignUp;
   }

   setStepValidation(step: number) {
     this.step = step + 1;
     console.log(step);
   }

   getStepValidation(): number{
     return this.step;
   }

}
