import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivevalidateComponent } from './reactivevalidate.component';

describe('ReactivevalidateComponent', () => {
  let component: ReactivevalidateComponent;
  let fixture: ComponentFixture<ReactivevalidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivevalidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivevalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
