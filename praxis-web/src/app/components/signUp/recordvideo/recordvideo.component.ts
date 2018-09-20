import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-recordvideo',
  templateUrl: './recordvideo.component.html',
  styleUrls: ['./recordvideo.component.css']
})
export class RecordvideoComponent implements AfterViewInit {



  ngOnInit() {
  }

  private stream: MediaStream;
 private recordRTC: any;

 @ViewChild('video') video;

 constructor(private router: Router) {
   console.log('hola xd');
 }

 ngAfterViewInit() {
   // set the initial state of the video
   let video:HTMLVideoElement = this.video.nativeElement;
   video.muted = false;
   video.controls = true;
   video.autoplay = false;

 }

  goToNextStep(){
    this.router.navigate(['student/signUp/step3']);
  }


  goToPrevStep(){
    this.router.navigate(['student/signUp/step1'])
  }


}
