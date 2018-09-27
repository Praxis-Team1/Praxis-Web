import { Component, OnInit } from '@angular/core';
import { admissionsService } from './../../../services/admissionsService';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { helperService } from '../../../services/helperService';
import { Student } from '../../../schemas/student';
import { httpService } from '../../../services/httpService';


@Component({
  selector: 'app-adminmainmenu',
  templateUrl: './adminmainmenu.component.html',
  styleUrls: ['./adminmainmenu.component.css']
})
export class AdminmainmenuComponent implements OnInit {
  public index: number;
  public student: Student;
  public students = [
    {
      name: 'carlos',
      birthdate: '2018-09-12',
      email: 'hablalo@oelo.com',
      password: 'jajaajajaaj',
      typeOfPraxis: 'first job',
      biography: 'me estoy describiendo',
      videourl: '',
      documentType: 'C.C',
      documentNumber: 114214123,
      university: 'Unal',
      semester: 8,

    },
    {
      name: 'arbe',
      birthdate: '2018-09-12',
      email: 'hablalo@oelo.com',
      password: 'jajaajajaaj',
      typeOfPraxis: 'first job',
      biography: 'me estoy describiendo',
      videourl: '',
      documentType: 'C.C',
      documentNumber: 114214123,
      university: 'Unal',
      semester: 8,

    },
    {
      name: 'santiago',
      birthdate: '2018-09-12',
      email: 'hablalo@oelo.com',
      password: 'jajaajajaaj', typeOfPraxis: 'first job',
      biography: 'me estoy describiendo',
      videourl: '',
      documentType: 'C.C',
      documentNumber: 114214123,
      university: 'Unal',
      semester: 8,

    },
    {
      name: 'ella',
      birthdate: '2016-09-12',
      email: 'hablalo@oelo.com',
      password: 'jajaajajaaj', typeOfPraxis: 'first job',
      biography: 'me estoy describiendo',
      videourl: '',
      documentType: 'C.C',
      documentNumber: 114214123,
      university: 'Unal',
      semester: 8,

    },
    {
      name: 'ellos',
      birthdate: '2018-09-12',
      email: 'hablalo@oelo.com',
      password: 'jajaajajaaj', typeOfPraxis: 'first job',
      biography: 'me estoy describiendo',
      videourl: '',
      documentType: 'C.C',
      documentNumber: 114214123,
      university: 'Unal',
      semester: 8,

    }
  ];
  passIndexValue(student) {
    this.student = student;
    this.router.navigate(['admin/admissions/information'], { queryParams: { student: this.student } }
    );
    console.log(student);
  }

  constructor(private router: Router, private sanitizer: DomSanitizer,
    private admissionsService: admissionsService, private http: httpService) {
    /** 
        this.student = this.admissionsService.getStudents();
        console.log('estudiantes ', this.student);
    */


    console.log(this.students[0].name);
  }
  ngOnInit() {
  }

}
