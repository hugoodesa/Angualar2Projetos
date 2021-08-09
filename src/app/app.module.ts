import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastradoSucessoDirective } from './shared/cadastrado-sucesso.directive';
import { FormatNamePipe } from './shared/pipes/format-name.pipe';
import { FormatCoinPipe } from './shared/pipes/format-coin.pipe';
import { HoverCardDirective } from './shared/hover-card.directive';
import { CurtirDirective } from './shared/curtir.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CadastrarProdutoComponent, ListaProdutosComponent, CadastradoSucessoDirective, FormatNamePipe, FormatCoinPipe, HoverCardDirective, CurtirDirective],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
