import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeForfaitsMiniComponent } from './liste-forfaits-mini.component';

describe('ListeForfaitsMiniComponent', () => {
  let component: ListeForfaitsMiniComponent;
  let fixture: ComponentFixture<ListeForfaitsMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeForfaitsMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeForfaitsMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
