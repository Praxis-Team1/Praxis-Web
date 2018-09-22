import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-validatedata',
  templateUrl: './validatedata.component.html',
  styleUrls: ['./validatedata.component.css']
})
export class ValidatedataComponent implements OnInit {

  private urlvideo: any;

  private mensaje: string;

  constructor(private router: Router, private route: ActivatedRoute, private sanitizer:  DomSanitizer) { }
  @ViewChild('video') video;


  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


  ngOnInit() {
     this.route
     .queryParams
     .subscribe(params => {
       this.urlvideo = params['urlvideo'];
     });
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
