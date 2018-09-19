import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-recordvideo',
  templateUrl: './recordvideo.component.html',
  styleUrls: ['./recordvideo.component.css']
})
export class RecordvideoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



  goToNextStep(){
    this.router.navigate(['student/signUp/step3']);
  }


  goToPrevStep(){

    this.router.navigate(['student/signUp/step1']);

  }


}
