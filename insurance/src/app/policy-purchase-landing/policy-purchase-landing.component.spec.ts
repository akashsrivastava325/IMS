import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyPurchaseLandingComponent } from './policy-purchase-landing.component';

describe('PolicyPurchaseLandingComponent', () => {
  let component: PolicyPurchaseLandingComponent;
  let fixture: ComponentFixture<PolicyPurchaseLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolicyPurchaseLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyPurchaseLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
