import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-validatedata',
  templateUrl: './validatedata.component.html',
  styleUrls: ['./validatedata.component.css']
})
export class ValidatedataComponent implements OnInit {

  private urlvideo: any;

  private mensaje: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {

     this.route
     .queryParams
     .subscribe(params => {

       this.urlvideo += params['urlvideo'];
       console.log(this.urlvideo);
       
    //   console.log(this.mensaje);
     });

  }

  goToNextStep(){
    //Falta.
  //  this.router.navigate(['student/signUp/step3']);
  }


  goToPrevStep(){
    this.router.navigate(['student/signUp/step2'])
  }

}
