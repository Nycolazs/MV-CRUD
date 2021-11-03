import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../../models/Estabelecimento';
import { EstabelecimentoService } from "./../../services/estabelecimentos.service";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'table-crud-estabelecimentos',
  templateUrl: './table-crud-estabelecimentos.component.html',
  styleUrls: ['./table-crud-estabelecimentos.component.scss']
})
export class TableCrudEstabelecimento implements OnInit {

  estabelecimentoDialog: boolean;

  estabelecimentos: Estabelecimento[];

  estabelecimento: Estabelecimento;

  selectedEstabelecimentos: Estabelecimento[];

  submitted: boolean;

  constructor(private estabelecimentoService: EstabelecimentoService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.estabelecimentoDialog = false,
      this.estabelecimentos = [],
      this.estabelecimento = {},
      this.selectedEstabelecimentos = [];
    this.submitted = false
  }

  ngOnInit() {
    this.estabelecimentoService.getEstabelecimentos().then(data => this.estabelecimentos = data);
    this.confirmationService.close();
  }

  openNew() {
    this.estabelecimento = {};
    this.submitted = false;
    this.estabelecimentoDialog = true;
  }

  editEstabelecimento(estabelecimento: Estabelecimento) {
    this.estabelecimento = { ...estabelecimento };
    this.estabelecimentoDialog = true;
  }

  deleteEstabelecimento(estabelecimento: Estabelecimento) {
    this.confirmationService.confirm({
      message: 'Deseja deletar ' + estabelecimento.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept:async () => {
        await this.estabelecimentoService.deleteEstabelecimento(estabelecimento.id);
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Estabelecimento deletado', life: 3000 });
        this.estabelecimentoDialog = false;
        this.ngOnInit();
      }
    });
  }

  hideDialog() {
    this.estabelecimentoDialog = false;
    this.submitted = false;
  }

  addEstabelecimento() {
    this.submitted = true;
    if (this.estabelecimento.nome.trim()) {
      if (this.estabelecimento.id) {
        this.estabelecimentoService.updateEstabelecimento(JSON.stringify(this.estabelecimento), this.estabelecimento.id).subscribe(_ => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Estabelecimento atualizado', life: 3000 });
          this.estabelecimentoDialog = false;
          this.ngOnInit();
        })
      }
      else {
        this.estabelecimentoService.addEstabelecimento(JSON.stringify(this.estabelecimento)).subscribe(_ => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Estabelecimento Criado', life: 3000 });
          this.estabelecimentoDialog = false;
          this.ngOnInit();
        })
      }

      this.estabelecimentoDialog = false;
      this.estabelecimento = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.estabelecimentos.length; i++) {
      if (this.estabelecimentos[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }


  async pesquisar({ value }: any) {
    if(value){
      let res:any = [];
      res = await this.estabelecimentoService.getEstabelecimentoNome(value).then(data => data);
      if(res.length>0 && res[0] != null){
        this.estabelecimentos = res;
      }else{
        this.ngOnInit();
      }
    }else{
      this.ngOnInit();
    }
  }


}
