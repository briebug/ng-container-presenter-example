import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesShippedComponent } from './packages-shipped.component';

describe('PackagesShippedComponent', () => {
  let component: PackagesShippedComponent;
  let fixture: ComponentFixture<PackagesShippedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesShippedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesShippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
