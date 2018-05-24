import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NegociacoesComponent } from './negociacoes/negociacoes.component';
import { JogosComponent } from './jogos/jogos.component';
import { JogoInfoComponent } from './jogo-info/jogo-info.component';


import { JogoService } from './jogos/jogo.service';
import { TrocaService } from './negociacoes/troca.service';
import { VendaService } from './negociacoes/venda.service';
import { InMemoryDataService } from './in-memory-data.service';
import { TrocaComponent } from './negociacoes/troca/troca.component';
import { VendaComponent } from './negociacoes/venda/venda.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'negociacoes', component: NegociacoesComponent },
  { path: 'jogos/:id', component: JogoInfoComponent},
  { path: 'jogos', component: JogosComponent },
  { path: 'trocas', component: TrocaComponent },
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
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    JogoService,
    TrocaService,
    VendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
