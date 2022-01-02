import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBenneComponent } from './list-benne.component';

describe('ListBenneComponent', () => {
  let component: ListBenneComponent;
  let fixture: ComponentFixture<ListBenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBenneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
