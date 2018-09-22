import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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

  @ViewChild('video') video;

  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;

   }

  goToNextStep(){
    //Falta.
  //  this.router.navigate(['student/signUp/step3']);
  }


  goToPrevStep(){
    this.router.navigate(['student/signUp/step2'])
  }

}
