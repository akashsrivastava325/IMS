import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScootyComponent } from './scooty.component';

describe('ScootyComponent', () => {
  let component: ScootyComponent;
  let fixture: ComponentFixture<ScootyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScootyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScootyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
