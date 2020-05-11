import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageContainerComponent } from './error-message-container.component';

describe('ErrorMessageContainerComponent', () => {
  let component: ErrorMessageContainerComponent;
  let fixture: ComponentFixture<ErrorMessageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
