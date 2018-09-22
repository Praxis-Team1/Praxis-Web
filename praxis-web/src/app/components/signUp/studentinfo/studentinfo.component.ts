import { Component, OnInit , ViewChild,} from '@angular/core';
import { RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer: any;


  videoValidate: any;



  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  goToNextStep(){
      this.router.navigate(['student/signUp/step2']);
  }



  toggleVideo(event: any) {
      this.videoplayer.nativeElement.play();
  }
}
