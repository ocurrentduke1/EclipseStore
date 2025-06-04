import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatinesComponent } from './patines.component';

describe('PatinesComponent', () => {
  let component: PatinesComponent;
  let fixture: ComponentFixture<PatinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
