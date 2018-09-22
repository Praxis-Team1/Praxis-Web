import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { RouterModule, Router, ActivatedRoute} from '@angular/router';
import * as RecordRTC from 'recordrtc/RecordRTC.min';


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
  private urlVideoRecorded: any;

  public urlArray: string[];


  private student;

 @ViewChild('video') video;

 constructor(private router: Router, private route: ActivatedRoute) {

   this.route
   .queryParams
   .subscribe(params => {
     this.student= params['student'];

     console.log(this.student.password);
   });

 }

 ngAfterViewInit() {
   // set the initial state of the video
   let video:HTMLVideoElement = this.video.nativeElement;
   video.muted = false;
   video.controls = true;
   video.autoplay = false;

  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }


  successCallback(stream: MediaStream) {

    var options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };

    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
   //handle error here
 }

 processVideo(audioVideoWebMURL) {
   let video: HTMLVideoElement = this.video.nativeElement;
   let recordRTC = this.recordRTC;
   video.src = audioVideoWebMURL;


   this.toggleControls();
   var recordedBlob = recordRTC.getBlob();
   recordRTC.getDataURL(function (dataURL) { });

   console.log("El src " , video.src);
   console.log("El blob " , recordedBlob);


   this.urlVideoRecorded = video.src;

   if(this.urlVideoRecorded != undefined){
      this.urlArray.push(this.urlVideoRecorded);
   }
 }

 startRecording() {
   let mediaContraints = {
     video: true,
     audio: true
   };

    navigator.mediaDevices.getUserMedia(mediaContraints).then(
     this.successCallback.bind(this), this.errorCallback.bind(this));
 }

 stopRecording() {
   let recordRTC = this.recordRTC;
   recordRTC.stopRecording(this.processVideo.bind(this));
   let stream = this.stream;
   stream.getAudioTracks().forEach(track => track.stop());
   stream.getVideoTracks().forEach(track => track.stop());
 }

 download() {
   this.recordRTC.save('video.mp4');
 }

 goToNextStep(){
    let recordRTC = this.recordRTC;
    var recordedBlob = recordRTC.getBlob();

    this.router.navigate(['student/signUp/step3'], { queryParams: { urlvideo: this.urlVideoRecorded}}).then(
        data=>{
          console.log("Data ", data);
        },
        error=>{
          console.log("El error es " , error);
        }
    );
  }

  seeArray(){

    for (var i = 0; i < this.urlArray.length; i++)
        console.log((i+1) + ": " + this.urlArray[i]);

  }

  goToPrevStep(){
    this.router.navigate(['student/signUp/step1'])
  }

}
