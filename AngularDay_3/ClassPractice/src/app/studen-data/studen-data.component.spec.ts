import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenDataComponent } from './studen-data.component';

describe('StudenDataComponent', () => {
  let component: StudenDataComponent;
  let fixture: ComponentFixture<StudenDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudenDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
