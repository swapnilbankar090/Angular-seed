import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevalidateComponent } from './templatevalidate.component';

describe('TemplatevalidateComponent', () => {
  let component: TemplatevalidateComponent;
  let fixture: ComponentFixture<TemplatevalidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatevalidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatevalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
