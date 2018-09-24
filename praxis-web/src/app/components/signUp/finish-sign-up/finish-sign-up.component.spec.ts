import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FinishSignUpComponent } from './finish-sign-up.component';

describe('FinishSignUpComponent', () => {
  let component: FinishSignUpComponent;
  let fixture: ComponentFixture<FinishSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinishSignUpComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
