import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDashboardComponent } from './other-dashboard.component';

describe('OtherDashboardComponent', () => {
  let component: OtherDashboardComponent;
  let fixture: ComponentFixture<OtherDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherDashboardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
