import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

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
        ReactiveFormsModule
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
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.goToNextStep).toHaveBeenCalled();
  }));

 it(`form should be invalid`, async(() => {
  component.SignUpForm.controls['name'].setValue('');
  component.SignUpForm.controls['DocumentType'].setValue('');
  component.SignUpForm.controls['document'].setValue('');
  component.SignUpForm.controls['email'].setValue('');
  component.SignUpForm.controls['PraxisType'].setValue('');
  component.SignUpForm.controls['date'].setValue('');
  component.SignUpForm.controls['password'].setValue('');
  component.SignUpForm.controls['confirm'].setValue('');
  component.SignUpForm.controls['university'].setValue('');
  component.SignUpForm.controls['semester'].setValue('');
  component.SignUpForm.controls['biography'].setValue('');
    expect(component.SignUpForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.SignUpForm.controls['name'].setValue('Carlos Santos');
    component.SignUpForm.controls['DocumentType'].setValue('1');
    component.SignUpForm.controls['document'].setValue('1152215835');
    component.SignUpForm.controls['email'].setValue('cesantosv@unal.edu.co');
    component.SignUpForm.controls['PraxisType'].setValue('20/09/2018');
    component.SignUpForm.controls['date'].setValue('1');
    component.SignUpForm.controls['password'].setValue('hola123');
    component.SignUpForm.controls['confirm'].setValue('hola123');
    component.SignUpForm.controls['university'].setValue('1');
    component.SignUpForm.controls['semester'].setValue('9');
    component.SignUpForm.controls['biography'].setValue('estoy describiendome');
   // component.SignUpForm.controls['confirm'].setValue('hola123');
    expect(component.SignUpForm.valid).toBeTruthy();
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
