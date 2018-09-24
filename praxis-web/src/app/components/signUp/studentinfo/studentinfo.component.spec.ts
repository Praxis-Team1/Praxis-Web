import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

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
        RouterTestingModule
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(StudentinfoComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
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

 it(`form should be invalid`, async(() => {
  component.form.controls['name'].setValue('');
  component.form.controls['DocumentType'].setValue('');
  component.form.controls['document'].setValue('');
  component.form.controls['email'].setValue('');
  component.form.controls['PraxisType'].setValue('');
  component.form.controls['date'].setValue('');
  component.form.controls['password'].setValue('');
  component.form.controls['confirm'].setValue('');
  component.form.controls['university'].setValue('');
  component.form.controls['semester'].setValue('');
  component.form.controls['biography'].setValue('');
    expect(component.form.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.form.controls['name'].setValue('Carlos Santos');
    component.form.controls['DocumentType'].setValue('1');
    component.form.controls['document'].setValue('1152215835');
    component.form.controls['email'].setValue('cesantosv@unal.edu.co');
    component.form.controls['PraxisType'].setValue('20/09/2018');
    component.form.controls['date'].setValue('1');
    component.form.controls['password'].setValue('hola123');
    component.form.controls['confirm'].setValue('hola123');
    component.form.controls['university'].setValue('1');
    component.form.controls['semester'].setValue('9');
    component.form.controls['biography'].setValue('estoy describiendome');
   // component.SignUpForm.controls['confirm'].setValue('hola123');
    expect(component.form.valid).toBeTruthy();
  }));
});



