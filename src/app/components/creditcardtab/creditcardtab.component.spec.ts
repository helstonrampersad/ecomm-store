import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardtabComponent } from './creditcardtab.component';

describe('CreditcardtabComponent', () => {
  let component: CreditcardtabComponent;
  let fixture: ComponentFixture<CreditcardtabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditcardtabComponent]
    });
    fixture = TestBed.createComponent(CreditcardtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
