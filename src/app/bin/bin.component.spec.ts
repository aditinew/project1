import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BINComponent } from './bin.component';

describe('BINComponent', () => {
  let component: BINComponent;
  let fixture: ComponentFixture<BINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BINComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
