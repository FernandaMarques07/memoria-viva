import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedefinirSenhaPage } from './redefinir-senha.page';

describe('RedefinirSenhaPage', () => {
  let component: RedefinirSenhaPage;
  let fixture: ComponentFixture<RedefinirSenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RedefinirSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
