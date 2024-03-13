import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceRequestsComponent } from './insurance-requests.component';

describe('InsuranceRequestsComponent', () => {
  let component: InsuranceRequestsComponent;
  let fixture: ComponentFixture<InsuranceRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsuranceRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuranceRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
