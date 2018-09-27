import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-surveyform',
  templateUrl: './surveyForm.component.html',
  styleUrls: ['./surveyForm.component.css']
})
export class SurveyFormComponent implements OnInit {

  tutors = ['David', 'Lia', 'Raul', 'Diego'];
  submitted = false;

  date = new Date();

  sessionT = [{virtual: true, faceToFace: false}];

  table1 = {
    columns: [
      {
        value: 1,
        name: 'Deficient'
      }, {
        value: 2,
        name: 'Good'
      },
      {
        value: 3,
        name: 'Excellent'
      }
    ],
    rows: [
      {
        value: 'Content',
        name: 'Session Content'
      }, {
        value: 'Time',
        name: 'Session Time'
      }, {
        value: 'Material',
        name: 'Session Material'
      }
    ]
  };
  table2 = {
    columns: [
      {
        value: 1,
        name: 'Deficient'
      }, {
        value: 2,
        name: 'Good'
      }, {
        value: 3,
        name: 'Excellent'
      }
    ],
    rows: [
      {
        value: 'Knowledge of the subject',
        name: 'Knowledge'
      }, {
        value: 'Ability to transmit knowledge',
        name: 'Ability'
      }, {
        value: 'Was the session dynamic?',
        name: 'dynamicSession'
      }, {
        value: 'Did the tutor solve your doubts?',
        name: 'solveDoubts'
      }, {
        value: 'Were the language and tone of voice appropriate?',
        name: 'languageAndVoice'
      }
    ]
  };
  sessionW = [{ value: 'Satisfactory', name: 'sessionWas' }, { value: 'Unsatisfactory', name: 'sessionWas' }];

  model = new Survey(1, this.date, this.tutors[0], this.sessionT, this.table1, this.table2, this.sessionW, 'Good session');

  private surveyForm: FormGroup;

  constructor() { }
  form() {
    // Defines the default state of the form
    this.surveyForm = new FormGroup({
      name: new FormControl('',
        Validators.compose([
          Validators.required
        ]))
    });
  }

  onSubmit() { this.submitted = true; }

  getSurvey() { return JSON.stringify(this.model); }

  ngOnInit(): void {
  }

}
