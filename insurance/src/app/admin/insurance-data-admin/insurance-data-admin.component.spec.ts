import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDataAdminComponent } from './insurance-data-admin.component';

describe('InsuranceDataAdminComponent', () => {
  let component: InsuranceDataAdminComponent;
  let fixture: ComponentFixture<InsuranceDataAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsuranceDataAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuranceDataAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
