import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrisbotComponent } from './krisbot.component';

describe('KrisbotComponent', () => {
  let component: KrisbotComponent;
  let fixture: ComponentFixture<KrisbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrisbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrisbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
