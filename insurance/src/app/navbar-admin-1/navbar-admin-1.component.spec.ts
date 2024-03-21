import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdmin1Component } from './navbar-admin-1.component';

describe('NavbarAdmin1Component', () => {
  let component: NavbarAdmin1Component;
  let fixture: ComponentFixture<NavbarAdmin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarAdmin1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarAdmin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
