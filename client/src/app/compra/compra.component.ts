import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Veiculo } from '../clientes/shared/veiculo';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  formCliente!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.createForm(new Veiculo())
  }

  createForm(veiculo: Veiculo) {
    this.formCliente = new FormGroup({
      modelo: new FormControl(veiculo.modelo),
      marca: new FormControl(veiculo.marca),
      ano_fabricacao: new FormControl(veiculo.ano_fabricacao),
      placa: new FormControl(veiculo.placa),
      cor: new FormControl(veiculo.cor),
      chassi: new FormControl(veiculo.chassi),
      data_compra: new FormControl(veiculo.data_compra),
      valor_compra: new FormControl(veiculo.valor_compra)
    })
  }

  onSubmit() {
    console.log(this.formCliente.value);
    this.createForm(new Veiculo());
  }
}
