import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesRushedComponent } from './packages-rushed.component';

describe('PackagesRushedComponent', () => {
  let component: PackagesRushedComponent;
  let fixture: ComponentFixture<PackagesRushedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesRushedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesRushedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
