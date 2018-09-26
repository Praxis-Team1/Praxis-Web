import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { helperService } from '../../../services/helperService';
import { Student } from '../../../schemas/student';

@Component({
  selector: 'app-validatedata',
  templateUrl: './validatedata.component.html',
  styleUrls: ['./validatedata.component.css']
})
export class ValidatedataComponent implements OnInit {

  private urlvideo: any;
  private mensaje: string;
  private student: Student;
  private step: number;

  constructor(private router: Router, private sanitizer:  DomSanitizer, private helperService: helperService) {
    this.student = this.helperService.getStudentOfSignUp();
    console.log("En validate data " , this.student);
  }

  @ViewChild('video') video;

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
    this.step = this.helperService.getStepValidation();
    console.log(this.step);
    if(this.step < 3){
      console.log(this.step);
      this.router.navigate(['student/signUp/step1'])
    }
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  goToNextStep(){
    //Falta.
   this.router.navigate(['student/signUp/step4']);
  }

  goToPrevStep(){
    this.router.navigate(['student/signUp/step2'])
  }
}
