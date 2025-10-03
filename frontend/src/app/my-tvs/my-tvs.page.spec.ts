import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyTvsPage } from './my-tvs.page';

describe('MyTvsPage', () => {
  let component: MyTvsPage;
  let fixture: ComponentFixture<MyTvsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTvsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
