import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPolicyStatusComponent } from './user-policy-status.component';

describe('UserPolicyStatusComponent', () => {
  let component: UserPolicyStatusComponent;
  let fixture: ComponentFixture<UserPolicyStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPolicyStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPolicyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
