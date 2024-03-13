import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDetailsDataComponent } from './claim-details-data.component';

describe('ClaimDetailsDataComponent', () => {
  let component: ClaimDetailsDataComponent;
  let fixture: ComponentFixture<ClaimDetailsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimDetailsDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
