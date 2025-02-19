import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [CommonModule, FormsModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Gerenciador de Tarefas';
  novaTarefa = '';
  exibirLista = true;
  tarefas: { nome: string; concluida: boolean }[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }

  concluirTarefa(index: number) {
    this.tarefas[index].concluida = true;
  }

  alternarLista() {
    this.exibirLista = !this.exibirLista;
  }
}
