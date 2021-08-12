import { CursosServiceService } from './cursos/cursos-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { MyRouteModule } from './my-route/my-route.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoExisteComponent } from './curso-nao-existe/curso-nao-existe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoExisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyRouteModule
  ],
  providers: [CursosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
