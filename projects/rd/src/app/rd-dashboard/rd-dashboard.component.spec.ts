import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdDashboardComponent } from './rd-dashboard.component';

describe('RdDashboardComponent', () => {
  let component: RdDashboardComponent;
  let fixture: ComponentFixture<RdDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
