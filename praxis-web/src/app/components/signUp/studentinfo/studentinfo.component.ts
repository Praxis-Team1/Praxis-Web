import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNextStep(){
      this.router.navigate(['student/signUp/step2']);
  }

}
