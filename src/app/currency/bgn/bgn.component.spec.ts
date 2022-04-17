import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgnComponent } from './bgn.component';

describe('BgnComponent', () => {
  let component: BgnComponent;
  let fixture: ComponentFixture<BgnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
