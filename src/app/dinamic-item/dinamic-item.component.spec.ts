import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicItemComponent } from './dinamic-item.component';

describe('DinamicItemComponent', () => {
  let component: DinamicItemComponent;
  let fixture: ComponentFixture<DinamicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamicItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinamicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
