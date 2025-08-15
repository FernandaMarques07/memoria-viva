import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class CadastroPage {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // ← adiciona isso

  constructor(private authService: AuthService) {}

  register() {
    this.errorMessage = ''; // limpa erro anterior

    this.authService.register(this.email, this.password)
      .then(userCredential => {
        console.log('Usuário cadastrado:', userCredential);
        // Redirecionar ou limpar formulário
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error);
        this.errorMessage = this.getFriendlyError(error.code); // trata o erro
      });
  }

  getFriendlyError(code: string): string {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Este e-mail já está em uso.';
      case 'auth/invalid-email':
        return 'O e-mail inserido é inválido.';
      case 'auth/weak-password':
        return 'A senha deve ter pelo menos 6 caracteres.';
      default:
        return 'Ocorreu um erro ao cadastrar. Tente novamente.';
    }
  }
}
