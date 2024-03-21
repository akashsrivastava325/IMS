import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpLanding2Component } from './exp-landing2.component';

describe('ExpLanding2Component', () => {
  let component: ExpLanding2Component;
  let fixture: ComponentFixture<ExpLanding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpLanding2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpLanding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
