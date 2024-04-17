import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockPitComponent } from './cock-pit.component';

describe('CockPitComponent', () => {
  let component: CockPitComponent;
  let fixture: ComponentFixture<CockPitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CockPitComponent]
    });
    fixture = TestBed.createComponent(CockPitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
