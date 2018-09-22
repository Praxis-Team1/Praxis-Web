import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-finish-sign-up',
  templateUrl: './finish-sign-up.component.html',
  styleUrls: ['./finish-sign-up.component.css']
})
export class FinishSignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



    goToPrevStep(){
      this.router.navigate(['student/signUp/step3'])
    }

}
