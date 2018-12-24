import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippletListComponent } from './snipplet-list.component';

describe('SnippletListComponent', () => {
  let component: SnippletListComponent;
  let fixture: ComponentFixture<SnippletListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippletListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
