import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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


import { JogoService } from './jogos/jogo.service';
import { TrocaService } from './negociacoes/troca/troca.service';
import { VendaService } from './negociacoes/venda/venda.service';
import { FormDataTrocaService } from './negociacoes/troca/form-data-troca-wizard/form-data-troca.service'; 
import { InMemoryDataService } from './in-memory-data.service';


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
  ],
  providers: [
    JogoService,
    TrocaService,
    VendaService,
    FormDataTrocaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
