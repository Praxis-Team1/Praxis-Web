import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { helperService } from '../../../services/helperService';
import { httpService } from '../../../services/httpService';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';


import { StudentinfoComponent } from './studentinfo.component';
describe('StudentinfoComponent', () => {
  let component: StudentinfoComponent;
  let fixture: ComponentFixture<StudentinfoComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentinfoComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [
        helperService,
        httpService,
        HttpClient,
        HttpHandler,
        BootstrapAlertService
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(StudentinfoComponent);
        component = fixture.componentInstance;
      });
  }));
  it(`should have as text 'Sign up page'`, async(() => {
    expect(component.text).toEqual('Sign up page');
  }));
  it(`should set submitted to true`, async(() => {
    component.goToNextStep();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the goToNextStep method`, async(() => {
    spyOn(component, 'goToNextStep');
    component.goToNextStep();
    expect(component.goToNextStep).toHaveBeenCalled();
  }));

  it(`rForm should be invalid`, async(() => {
    component.helperService.getStudentOfSignUp().name = '';
    component.helperService.getStudentOfSignUp().documentType = '';
    component.helperService.getStudentOfSignUp().documentNumber = 21;
    component.helperService.getStudentOfSignUp().email = '';
    component.helperService.getStudentOfSignUp().typeOfPraxis = '';
    component.helperService.getStudentOfSignUp().birthdate = '';
    component.helperService.getStudentOfSignUp().password = '';
    component.verificationPass = '';
    component.helperService.getStudentOfSignUp().university = '';
    component.helperService.getStudentOfSignUp().semester = 21;
    component.helperService.getStudentOfSignUp().biography = '';
    expect(component.rForm.valid).toBeFalsy();
  }));

  it(`rForm should be valid`, async(() => {
    component.helperService.getStudentOfSignUp().name = 'Carlos';
    component.helperService.getStudentOfSignUp().documentType = 'C.C.';
    component.helperService.getStudentOfSignUp().documentNumber = 12345567;
    component.helperService.getStudentOfSignUp().email = 'cesantosv@unal.edu.co';
    component.helperService.getStudentOfSignUp().typeOfPraxis = 'Practice';
    component.helperService.getStudentOfSignUp().birthdate = '20/09/2018';
    component.helperService.getStudentOfSignUp().password = 'hola123';
    component.verificationPass = 'hola123';
    component.helperService.getStudentOfSignUp().university = 'UNal';
    component.helperService.getStudentOfSignUp().semester = 12;
    component.helperService.getStudentOfSignUp().biography = 'mes estoy describiendo';
    expect(component.rForm.valid).toBeTruthy();
  }));
});


/**
describe('StudentinfoComponent', () => {
  let component: StudentinfoComponent;
  let fixture: ComponentFixture<StudentinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */
