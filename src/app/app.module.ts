import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**import { HttpClientModule} from '@angular/common/http';*/

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NegociacoesComponent } from './negociacoes/negociacoes.component';
import { JogosComponent } from './jogos/jogos.component';

import { JogoService } from './jogos/jogo.service';
import { TrocaService } from './negociacoes/troca.service';
import { JogoInfoComponent } from './jogo-info/jogo-info.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'menu', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'negociacoes', component: NegociacoesComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'jogo-info', component: JogoInfoComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    NegociacoesComponent,
    JogosComponent,
    JogoInfoComponent,
  ],
  imports: [
    /**HttpClientModule,*/
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [JogoService, TrocaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
