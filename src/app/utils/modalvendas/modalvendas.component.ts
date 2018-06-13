import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormDataVendaService } from '../../negociacoes/venda/form-data-venda-wizard/form-data-venda.service';


@Component({
  selector: 'app-modalvendas',
  templateUrl: './modalvendas.component.html',
  styleUrls: ['./modalvendas.component.scss']
})
export class ModalvendasComponent {

  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private formDataVendaService: FormDataVendaService
  ) {}

  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
