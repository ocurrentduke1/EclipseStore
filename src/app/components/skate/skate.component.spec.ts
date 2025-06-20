import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateComponent } from './skate.component';

describe('SkateComponent', () => {
  let component: SkateComponent;
  let fixture: ComponentFixture<SkateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
