import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDetailsDataAdminComponent } from './claim-details-data-admin.component';

describe('ClaimDetailsDataAdminComponent', () => {
  let component: ClaimDetailsDataAdminComponent;
  let fixture: ComponentFixture<ClaimDetailsDataAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimDetailsDataAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimDetailsDataAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
