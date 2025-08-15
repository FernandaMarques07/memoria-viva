import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueciMinhaSenhaPage } from './esqueci-minha-senha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueciMinhaSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqueciMinhaSenhaPageRoutingModule {}
