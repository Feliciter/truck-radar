import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModalDeleteComponent } from './popup-modal-delete.component';

describe('PopupModalDeleteComponent', () => {
  let component: PopupModalDeleteComponent;
  let fixture: ComponentFixture<PopupModalDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupModalDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
