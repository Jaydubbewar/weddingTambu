import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambuComponent } from './tambu.component';

describe('TambuComponent', () => {
  let component: TambuComponent;
  let fixture: ComponentFixture<TambuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
