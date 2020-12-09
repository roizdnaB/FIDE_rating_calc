import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIDERatingInitComponent } from './fiderating-init.component';

describe('FIDERatingInitComponent', () => {
  let component: FIDERatingInitComponent;
  let fixture: ComponentFixture<FIDERatingInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIDERatingInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIDERatingInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
