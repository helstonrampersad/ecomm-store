import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcgtabComponent } from './tcgtab.component';

describe('TcgtabComponent', () => {
  let component: TcgtabComponent;
  let fixture: ComponentFixture<TcgtabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcgtabComponent]
    });
    fixture = TestBed.createComponent(TcgtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
