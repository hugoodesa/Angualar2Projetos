import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastradoSucessoDirective } from './shared/cadastrado-sucesso.directive';
import { FormatNamePipe } from './shared/pipes/format-name.pipe';
import { FormatCoinPipe } from './shared/pipes/format-coin.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CadastrarProdutoComponent, ListaProdutosComponent, CadastradoSucessoDirective, FormatNamePipe, FormatCoinPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
