import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtSlideInputComponent } from './mt-slide-input.component';

describe('MtSlideInputComponent', () => {
  let component: MtSlideInputComponent;
  let fixture: ComponentFixture<MtSlideInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtSlideInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtSlideInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
