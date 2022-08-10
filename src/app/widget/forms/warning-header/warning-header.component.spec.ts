import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningHeaderComponent } from './warning-header.component';

describe('WarningHeaderComponent', () => {
  let component: WarningHeaderComponent;
  let fixture: ComponentFixture<WarningHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
