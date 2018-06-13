import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NegociacoesComponent } from './negociacoes/negociacoes.component';
import { JogosComponent } from './jogos/jogos.component';
import { JogoInfoComponent } from './jogo-info/jogo-info.component';
import { TrocaComponent } from './negociacoes/troca/troca.component';
import { VendaComponent } from './negociacoes/venda/venda.component';
import { Trocawizard1stepComponent } from './negociacoes/troca/trocawizard-1step/trocawizard-1step.component';
import { Trocawizard2stepComponent } from './negociacoes/troca/trocawizard-2step/trocawizard-2step.component';
import { Vendawizard1stepComponent } from './negociacoes/venda/vendawizard-1step/vendawizard-1step.component';
import { Vendawizard2stepComponent } from './negociacoes/venda/vendawizard-2step/vendawizard-2step.component';

import { JogoService } from './jogos/jogo.service';
import { TrocaService } from './negociacoes/troca/troca.service';
import { VendaService } from './negociacoes/venda/venda.service';
import { FormDataTrocaService } from './negociacoes/troca/form-data-troca-wizard/form-data-troca.service'; 
import { InMemoryDataService } from './in-memory-data.service';
import { FormDataVendaService } from './negociacoes/venda/form-data-venda-wizard/form-data-venda.service';
import { ModalComponent } from './utils/modaltrocas/modal.component';
import { ModalvendasComponent } from './utils/modalvendas/modalvendas.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'negociacoes', component: NegociacoesComponent },

  { path: 'jogos/:id', component: JogoInfoComponent},
  { path: 'jogos', component: JogosComponent },

  { path: 'trocas', component: TrocaComponent },
  { path: 'trocas/criar/seljogos', component: Trocawizard1stepComponent },
  { path: 'trocas/criar/troca', component: Trocawizard2stepComponent },

  { path: 'vendas', component: VendaComponent },
  { path: 'vendas/criar/seljogo', component: Vendawizard1stepComponent },
  { path: 'vendas/criar/venda', component: Vendawizard2stepComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    NegociacoesComponent,
    JogosComponent,
    JogoInfoComponent,
    TrocaComponent,
    VendaComponent,
    Trocawizard1stepComponent,
    Trocawizard2stepComponent,
    Vendawizard1stepComponent,
    Vendawizard2stepComponent,
    ModalComponent,
    ModalvendasComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule,
    NgxCurrencyModule,
    NgbModule.forRoot(),
  ],
  providers: [
    JogoService,
    TrocaService,
    VendaService,
    FormDataTrocaService,
    FormDataVendaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
