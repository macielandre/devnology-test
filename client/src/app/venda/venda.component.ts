import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recibo } from '../clientes/shared/recibo';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  formVendedor!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.createForm(new Recibo())
  }

  createForm(recibo: Recibo) {
    this.formVendedor = new FormGroup({
      data_venda: new FormControl(recibo.data_venda),
      valor_venda: new FormControl(recibo.valor_venda),
      comissao: new FormControl(recibo.comissao)
    })
  }

  onSubmit() {
    console.log(this.formVendedor.value);
    this.createForm(new Recibo());
  }

}
