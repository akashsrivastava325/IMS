import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing3Component } from './testing-3.component';

describe('Testing3Component', () => {
  let component: Testing3Component;
  let fixture: ComponentFixture<Testing3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Testing3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
