import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIDERatingChangeSingleComponent } from './fiderating-change-single.component';

describe('FIDERatingChangeComponent', () => {
  let component: FIDERatingChangeSingleComponent;
  let fixture: ComponentFixture<FIDERatingChangeSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIDERatingChangeSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIDERatingChangeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
