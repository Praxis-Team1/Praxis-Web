import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {


  public grades: string ="grades 1";
  public attendance: string = "attendance 2";
  public survey: string = "survey 3";

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
