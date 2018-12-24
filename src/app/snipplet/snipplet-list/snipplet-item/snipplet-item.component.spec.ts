import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippletItemComponent } from './snipplet-item.component';

describe('SnippletItemComponent', () => {
  let component: SnippletItemComponent;
  let fixture: ComponentFixture<SnippletItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippletItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippletItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
