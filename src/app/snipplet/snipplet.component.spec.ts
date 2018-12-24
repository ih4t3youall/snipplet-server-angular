import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippletComponent } from './snipplet.component';

describe('SnippletComponent', () => {
  let component: SnippletComponent;
  let fixture: ComponentFixture<SnippletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
