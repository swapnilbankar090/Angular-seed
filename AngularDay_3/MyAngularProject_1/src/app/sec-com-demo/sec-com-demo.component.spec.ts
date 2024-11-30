import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecComDemoComponent } from './sec-com-demo.component';

describe('SecComDemoComponent', () => {
  let component: SecComDemoComponent;
  let fixture: ComponentFixture<SecComDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecComDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecComDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
