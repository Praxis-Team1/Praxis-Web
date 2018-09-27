import { Component, OnInit } from '@angular/core';
import { AdminmainmenuComponent } from './../adminmainmenu/adminmainmenu.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  public students = [];

  constructor(private AdminmainmenuComponent: AdminmainmenuComponent, private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params,'ajajaj');
    });
    console.log(this.AdminmainmenuComponent.student);
    this.students = this.AdminmainmenuComponent.students;
    console.log(this.students);

  }

  ngOnInit() {
  }

}
