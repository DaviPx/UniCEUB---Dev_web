import { Injectable } from '@angular/core';

import { FormData, SelJogos, DataTroca } from './formDataTroca';


@Injectable()
export class FormDataTrocaService {

  private formData: FormData = new FormData();
  private step: number = 1;
  private isSelJogosValid = false;
  private isDataTrocaValid = false;


  getSelJogos(): SelJogos {
    let seljogos: SelJogos = {
      jogo_negociador: this.formData.jogo_negociador,
      jogo_interessado: this.formData.jogo_negociador
    };

    return seljogos;
  }

  setSelJogos(data: SelJogos) {
    this.formData.jogo_negociador = data.jogo_negociador;
    this.formData.jogo_interessado = data.jogo_interessado;
  }


  getDataTroca(): DataTroca {
    let datatroca: DataTroca = {
      interesse: this.formData.interesse,
      status_troca: this.formData.status_troca
    };

    return datatroca;
  }

  setDataTroca(data: DataTroca) {
    this.formData.interesse = data.interesse;
    this.formData.status_troca = data.status_troca;
  }


  getFormData(): FormData {
    return this.formData;
  }

  resetFormData(): FormData {
    this.formData.clear();
    this.isSelJogosValid = this.isDataTrocaValid = false;
    return this.formData;
  }

  isFormValid() {
    return this.isSelJogosValid &&
           this.isDataTrocaValid &&
           this.isFormValid;
  }

  changeStep(step: number) {
    this.step = step;
  }

}
