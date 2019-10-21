import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RdAppComponent } from './rd-app.component';

describe('RdAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RdAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RdAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rd'`, () => {
    const fixture = TestBed.createComponent(RdAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rd');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RdAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('rd app is running!');
  });
});
