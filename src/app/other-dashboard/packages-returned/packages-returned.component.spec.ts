import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesReturnedComponent } from './packages-returned.component';

describe('PackagesReturnedComponent', () => {
  let component: PackagesReturnedComponent;
  let fixture: ComponentFixture<PackagesReturnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesReturnedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesReturnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
