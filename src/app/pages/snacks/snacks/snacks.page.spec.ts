import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnacksPage } from './snacks.page';

describe('SnacksPage', () => {
  let component: SnacksPage;
  let fixture: ComponentFixture<SnacksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SnacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
