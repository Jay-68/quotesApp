import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuoteInputComponent } from './new-quote-input.component';

describe('NewQuoteInputComponent', () => {
  let component: NewQuoteInputComponent;
  let fixture: ComponentFixture<NewQuoteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuoteInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuoteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
