import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaPage } from './multimedia.page';

describe('MultimediaPage', () => {
  let component: MultimediaPage;
  let fixture: ComponentFixture<MultimediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
