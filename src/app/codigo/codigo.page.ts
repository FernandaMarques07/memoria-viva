import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Importar IonicModule para usar componentes do Ionic
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
  standalone: true,
   imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
})
export class CodigoPage {
  // Seu código aqui
}

