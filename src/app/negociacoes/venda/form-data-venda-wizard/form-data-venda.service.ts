import { Injectable } from '@angular/core';

import { FormData, SelJogo, DataVenda } from './formDataVenda';


@Injectable()
export class FormDataVendaService {

  private formData: FormData = new FormData();
  private isSelJogoValid = false;
  private isDataVendaValid = false;

  getSelJogo(): SelJogo {
    
    let seljogo: SelJogo = {
      jogo: this.formData.jogo
    };

    return seljogo;
  }

  setSelJogo(data: SelJogo) {
    this.formData.jogo = data.jogo;
  }


  getDataVenda(): DataVenda {
    let datavenda: DataVenda = {
      preco_venda: this.formData.preco_venda,
      interesse: this.formData.interesse,
      comprador_encontrado: this.formData.comprador_encontrado
    };

    return datavenda;
  }

  setDataVenda(data: DataVenda) {
    this.formData.interesse = data.interesse;
    this.formData.comprador_encontrado = data.comprador_encontrado;
  }

  getFormData(): FormData {
    return this.formData;
  }

  resetFormData(): FormData {
    this.formData.clear();
    this.isSelJogoValid = this.isDataVendaValid = false;
    return this.formData;
  }

  isFormValid() {
    return this.isSelJogoValid &&
           this.isDataVendaValid &&
           this.isFormValid;
  }

}
