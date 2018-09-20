import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedataComponent } from './validatedata.component';

describe('ValidatedataComponent', () => {
  let component: ValidatedataComponent;
  let fixture: ComponentFixture<ValidatedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
