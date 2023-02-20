import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfailsComponent } from './profails.component';

describe('ProfailsComponent', () => {
  let component: ProfailsComponent;
  let fixture: ComponentFixture<ProfailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
