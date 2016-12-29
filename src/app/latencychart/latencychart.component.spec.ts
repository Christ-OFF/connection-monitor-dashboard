/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LatencychartComponent } from './latencychart.component';

describe('LatencychartComponent', () => {
  let component: LatencychartComponent;
  let fixture: ComponentFixture<LatencychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatencychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatencychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
