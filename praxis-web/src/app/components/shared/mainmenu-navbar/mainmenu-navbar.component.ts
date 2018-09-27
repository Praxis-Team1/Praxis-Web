import { Component, OnInit } from '@angular/core';

import { generalService } from '../../../services/generalService';


@Component({
  selector: 'app-mainmenu-navbar',
  templateUrl: './mainmenu-navbar.component.html',
  styleUrls: ['./mainmenu-navbar.component.css']
})
export class MainmenuNavbarComponent implements OnInit {

  constructor(public generalService: generalService) {

       console.log(this.generalService.statusNavBarMenuStudent);

  }

  ngOnInit() {
  }

}
