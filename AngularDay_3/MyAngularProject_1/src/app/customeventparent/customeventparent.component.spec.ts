import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeventparentComponent } from './customeventparent.component';

describe('CustomeventparentComponent', () => {
  let component: CustomeventparentComponent;
  let fixture: ComponentFixture<CustomeventparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeventparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeventparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
