import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionalesPage } from './adicionales.page';

describe('AdicionalesPage', () => {
  let component: AdicionalesPage;
  let fixture: ComponentFixture<AdicionalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdicionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
