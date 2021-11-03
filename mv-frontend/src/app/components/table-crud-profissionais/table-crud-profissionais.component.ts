import { Component, OnInit } from '@angular/core';
import { Profissional } from '../../models/Profissional';
import { Estabelecimento } from '../../models/Estabelecimento';
import { ProfissionalService } from "./../../services/profissionais.service";
import { EstabelecimentoService } from "./../../services/estabelecimentos.service";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'table-crud-profissionais',
  templateUrl: './table-crud-profissionais.component.html',
  styleUrls: ['./table-crud-profissionais.component.scss']
})


export class TableCrudProfissional implements OnInit {

  profissionalDialog: boolean;

  profissionais: Profissional[];

  profissional: Profissional;

  selectedProfissionais: Profissional[];

  submitted: boolean;

  estabelecimentoSelected: Estabelecimento;

  estabelecimentSelected: any = {
    name: "",
    code: "",
  };

  estabelecimentos: Estabelecimento[];

  estabelecimentosSelected: any[];

  constructor(private profissionalService: ProfissionalService, private estabelecimentoService: EstabelecimentoService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.profissionalDialog = false,
      this.profissionais = [],
      this.profissional = {},
      this.selectedProfissionais = [];
    this.submitted = false,
      this.estabelecimentosSelected = [];
  }

  async ngOnInit() {
    await this.profissionalService.getProfissionais().then(data => this.profissionais = data);
    this.confirmationService.close();
  }

  addButaoEstabelecimento(estabelecimento: Estabelecimento) {
    if (estabelecimento != undefined) {
      this.estabelecimentosSelected.push(estabelecimento);
    }

    console.log(this.estabelecimentosSelected);

    // console.log(this.estabelecimentosSelected);
  }

  async insereEstabelecimentos() {
    await this.estabelecimentoService.getEstabelecimentos().then(data => {
      this.estabelecimentos = <any>data.map((value, index) => {
        return {
          name: value.nome,
          code: value.id
        };
      })
    });
    console.log(this.estabelecimentos);
  }


  openNew() {
    this.profissional = {};
    this.submitted = false;
    this.profissionalDialog = true;
    this.insereEstabelecimentos();
  }

  editProfissional(profissional: Profissional) {
    this.profissional = { ...profissional };
    this.profissionalDialog = true;
  }

  deleteProfissional(profissional: Profissional) {
    this.confirmationService.confirm({
      message: 'Deseja deletar ' + profissional.nome + '?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        await this.profissionalService.deleteProfissional(profissional.id);
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Profissional Deletado', life: 3000 });
        this.profissionalDialog = false;
        this.ngOnInit();
      }
    });
  }

  hideDialog() {
    this.profissionalDialog = false;
    this.submitted = false;
  }

  addProfissional() {
    this.submitted = true;

    if (this.profissional.nome.trim()) {
      if (this.profissional.id) {
        this.profissionalService.updateProfissional(JSON.stringify(this.profissional), this.profissional.id).subscribe(_ => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Profissional Atualizado', life: 3000 });
          this.profissionalDialog = false;
          this.ngOnInit();
        })
      }
      else {
        this.profissionalService.addProfissional(JSON.stringify(this.profissional)).subscribe(_ => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Profissional Criado', life: 3000 });
          this.profissionalDialog = false;
          this.ngOnInit();
        })
      }

      this.profissionalDialog = false;
      this.profissional = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.profissionais.length; i++) {
      if (this.profissionais[i].id === id) {
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
    if (value) {
      let res: any = [];
      res = await this.profissionalService.getProfissionalNome(value).then(data => data);
      if (res.length > 0 && res[0] != null) {
        this.profissionais = res;
      } else {
        this.ngOnInit();
      }
    } else {
      this.ngOnInit();
    }
  }
}
