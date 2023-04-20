import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatilloPage } from './platillo.page';

describe('PlatilloPage', () => {
  let component: PlatilloPage;
  let fixture: ComponentFixture<PlatilloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlatilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
