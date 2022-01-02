import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBenneComponent } from './add-benne.component';

describe('AddBenneComponent', () => {
  let component: AddBenneComponent;
  let fixture: ComponentFixture<AddBenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBenneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
