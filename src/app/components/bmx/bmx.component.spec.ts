import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxComponent } from './bmx.component';

describe('BmxComponent', () => {
  let component: BmxComponent;
  let fixture: ComponentFixture<BmxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
