import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSignupComponent } from './log-signup.component';

describe('LogSignupComponent', () => {
  let component: LogSignupComponent;
  let fixture: ComponentFixture<LogSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
