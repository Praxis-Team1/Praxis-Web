import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminmainmenuComponent } from './../adminmainmenu/adminmainmenu.component';
import { ActivatedRoute, Router } from '@angular/router';
import { helperService } from './../../../services/helperService';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  public students = [];
  semester: any;
  university: any;
  name: any;
  birthdate: any;
  email: any;
  password: any;
  typeOfPraxis: any;
  biography: any;
  videoUrl: any;
  documentType: any;
  documentNumber: any;

  @ViewChild('video') video;

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  constructor(private AdminmainmenuComponent: AdminmainmenuComponent, private route: ActivatedRoute, private router: Router, private helperService: helperService, private sanitizer:  DomSanitizer) {
    this.route.queryParams.subscribe(params => {
    this.name = params['name'];
    this.birthdate = params['birthdate'];
    this.email = params['email'];
    this.password = params['password'];
    this.typeOfPraxis = params['typeOfPraxis'];
    this.biography = params['biography'];
    this.documentType = params['documentType'];
    this.documentNumber = params['documentNumber'];
    this.university = params['university'];
    this.semester = params['semester'];
    this.videoUrl = this.helperService.getFileUrl(this.email + '.mp4');
    // console.log(this.email);
    // console.log(this.name, 'ajsdasdasd');
    });
  }

  goToPrevStep(){
    this.router.navigate(['admin/admissions']);
  }

  acceptStudent(){
    console.log('Accept');
  }

  denyStudent(){
    console.log('Deny');
  }

  ngOnInit() {
  }

}
