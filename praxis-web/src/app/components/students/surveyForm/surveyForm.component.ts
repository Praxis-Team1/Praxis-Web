import { Component, OnInit } from '@angular/core';
// import { Survey } from '../survey';

@Component({
  selector: 'app-survey',
  templateUrl: './surveyForm.component.html',
  styleUrls: ['./surveyForm.component.css']
})
export class SurveyFormComponent implements OnInit {

  constructor() { }
  tutors = ['David', 'Lia',
    'Raul', 'Diego'];
  submitted = false;

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

}
