import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { admissionsService } from './../../../services/admissionsService';
import { RouterModule, Router, ActivatedRoute, NavigationExtras } from '@angular/router';
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
  constructor(private router: Router, private sanitizer: DomSanitizer, private http: httpService) {
    /**
        this.student = this.admissionsService.getStudents();
        console.log('estudiantes ', this.student);
    */
    // console.log(this.students[0].name);
  }

  public index: number;
  public student: Student;
  //Should ask to the backend for the students
  public students = [
    {
      name: 'carlos',
      birthdate: '2018-09-12',
      email: 'jupvillegasgo@unal.edu.co',
      password: 'jajaajajaaj',
      typeOfPraxis: 'first job',
      biography: 'me estoy describiendo',
      videoUrl: '',
      documentType: 'C.C',
      documentNumber: 114214123,
      university: 'Unal',
      semester: 8,
    },
    {
      name: 'Santiago Arbelaez',
      birthdate: '1996-08-02',
      email: 'jupvillegasgo@unal.edu.co',
      password: 'jajaajajaaj',
      typeOfPraxis: 'first job',
      biography: "I'm describing me",
      videoUrl: '',
      documentType: 'C.C',
      documentNumber: 1037650445,
      university: 'Universidad Nacional de Colombia',
      semester: 8,
    },
    {
      name: 'santiago',
      birthdate: '2018-09-12',
      email: 'jupvillegasgo@unal.edu.co',
      password: 'jajaajajaaj', typeOfPraxis: 'first job',
      biography: 'me estoy describiendo',
      videoUrl: '',
      documentType: 'C.C',
      documentNumber: 114214123,
      university: 'Unal',
      semester: 8,
    },
    {
      name: 'ella',
      birthdate: '2016-09-12',
      email: 'jupvillegasgo@unal.edu.co',
      password: 'jajaajajaaj', typeOfPraxis: 'first job',
      biography: 'me estoy describiendo',
      videoUrl: '',
      documentType: 'C.C',
      documentNumber: 114214123,
      university: 'Unal',
      semester: 8,
    },
    {
      name: 'ellos',
      birthdate: '2018-09-12',
      email: 'jupvillegasgo@unal.edu.co',
      password: 'jajaajajaaj', typeOfPraxis: 'first job',
      biography: 'me estoy describiendo',
      videoUrl: '',
      documentType: 'C.C',
      documentNumber: 114214123,
      university: 'Unal',
      semester: 8,
    }
  ];

  passIndexValue(student: Student) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        name: student.name,
        birthdate: student.birthdate,
        email: student.email,
        // password: student.password,
        typeOfPraxis: student.typeOfPraxis,
        biography: student.biography,
        videoUrl: student.videoUrl,
        documentType: student.documentType,
        documentNumber: student.documentNumber,
        university: student.university,
        semester: student.semester
      }
  };
    this.student = student;
    this.router.navigate(['admin/admissions/information'], navigationExtras );
    // console.log(student);
  }

  ngOnInit() {
  }

}
