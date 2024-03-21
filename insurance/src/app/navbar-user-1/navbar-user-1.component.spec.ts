import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUser1Component } from './navbar-user-1.component';

describe('NavbarUser1Component', () => {
  let component: NavbarUser1Component;
  let fixture: ComponentFixture<NavbarUser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarUser1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
