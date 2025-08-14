import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedefinirSenhaPage } from './redefinir-senha.page';

const routes: Routes = [
  {
    path: '',
    component: RedefinirSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedefinirSenhaPageRoutingModule {}
