import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-validatedata',
  templateUrl: './validatedata.component.html',
  styleUrls: ['./validatedata.component.css']
})
export class ValidatedataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNextStep(){
    //Falta.
  //  this.router.navigate(['student/signUp/step3']);
  }


  goToPrevStep(){
    this.router.navigate(['student/signUp/step2'])
  }

}
