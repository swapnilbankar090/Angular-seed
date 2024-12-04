import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeventChildComponent } from './customevent-child.component';

describe('CustomeventChildComponent', () => {
  let component: CustomeventChildComponent;
  let fixture: ComponentFixture<CustomeventChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeventChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeventChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
