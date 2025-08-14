import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsqueciMinhaSenhaPage } from './esqueci-minha-senha.page';

describe('EsqueciMinhaSenhaPage', () => {
  let component: EsqueciMinhaSenhaPage;
  let fixture: ComponentFixture<EsqueciMinhaSenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqueciMinhaSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
