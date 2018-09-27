import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute} from '@angular/router';
import { generalService } from '../../../services/generalService';
import { httpService } from '../../../services/httpService';
import { Session } from '../../../schemas/session';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {


  public grades: string ="grades 1";
  public attendance: string = "attendance 2";
  public survey: string = "survey 3";

  public sessions: any = [];

  constructor(private router: Router, private generalService: generalService, private http: httpService) {
         this.generalService.statusNavBarInicial = true;
         this.generalService.statusNavBarMenuStudent = false;


         this.http.getSessions().subscribe((data) => {
           
            const datos =JSON.parse(JSON.stringify(data));

            console.log(datos.length);

            this.sessions = datos;

            console.log(this.sessions.length);

            for(let i = 0; i < this.sessions.length; i++){
                console.log(this.sessions[i].name);
            }

         } ,
         (error) => {
             console.log(error);
         }
       )

  }

  ngOnInit() {
  }


}
