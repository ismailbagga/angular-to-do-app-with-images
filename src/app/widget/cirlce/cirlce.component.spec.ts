import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirlceComponent } from './cirlce.component';

describe('CirlceComponent', () => {
  let component: CirlceComponent;
  let fixture: ComponentFixture<CirlceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirlceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirlceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
