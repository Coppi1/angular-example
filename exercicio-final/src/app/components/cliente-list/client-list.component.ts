import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'country', 'gender', 'newsletter'];
  dataSource: any[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.dataSource = this.clienteService.obterClientes();
  }
}