import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtrafficComponent } from './formtraffic.component';

describe('FormtrafficComponent', () => {
  let component: FormtrafficComponent;
  let fixture: ComponentFixture<FormtrafficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtrafficComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormtrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
