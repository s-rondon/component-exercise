import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHiComponent } from './button-hi.component';

describe('ButtonHiComponent', () => {
  let component: ButtonHiComponent;
  let fixture: ComponentFixture<ButtonHiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonHiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
