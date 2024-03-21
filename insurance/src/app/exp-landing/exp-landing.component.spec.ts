import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpLandingComponent } from './exp-landing.component';

describe('ExpLandingComponent', () => {
  let component: ExpLandingComponent;
  let fixture: ComponentFixture<ExpLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
