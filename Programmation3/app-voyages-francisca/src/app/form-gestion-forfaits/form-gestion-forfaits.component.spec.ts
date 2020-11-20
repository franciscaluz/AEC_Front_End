import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGestionForfaitsComponent } from './form-gestion-forfaits.component';

describe('FormGestionForfaitsComponent', () => {
  let component: FormGestionForfaitsComponent;
  let fixture: ComponentFixture<FormGestionForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGestionForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGestionForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
