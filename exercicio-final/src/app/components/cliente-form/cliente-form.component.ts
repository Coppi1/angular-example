import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.clienteForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0), Validators.max(120)]],
      country: ['', Validators.required],    
      gender: ['', Validators.required],       
      newsletter: [false]                 
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {

      console.log('Dados do formulário:', this.clienteForm.value);

      const novoCliente = {
        name: this.clienteForm.value.name,
        age: this.clienteForm.value.age,
        country: this.clienteForm.value.country,
        gender: this.clienteForm.value.gender,
        newsletter: this.clienteForm.value.newsletter
      };

      this.clienteService.adicionarCliente(novoCliente);

      this.snackBar.open('Cliente salvo com sucesso!', 'Fechar', {
        duration: 3000
      });

      this.router.navigate(['/list']);
    }
  }

  onCancel() {
    this.router.navigate(['/list']);
  }
}