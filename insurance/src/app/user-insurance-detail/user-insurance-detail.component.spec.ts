import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInsuranceDetailComponent } from './user-insurance-detail.component';

describe('UserInsuranceDetailComponent', () => {
  let component: UserInsuranceDetailComponent;
  let fixture: ComponentFixture<UserInsuranceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInsuranceDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInsuranceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
