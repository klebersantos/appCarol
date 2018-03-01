import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ContatoPage } from '../pages/contato/contato';
import { CarteirasPage } from '../pages/carteiras/carteiras';
import { ProdutosDetalhesPage } from '../pages/produtos-detalhes/produtos-detalhes';
import { CategoriasPage } from '../pages/categorias/categorias';
import { BonePage } from '../pages/bone/bone';
import { CarteirasProvider } from '../providers/carteiras/carteiras';
import { CarteirasDetalhesPageModule } from '../pages/carteiras-detalhes/carteiras-detalhes.module';
import { BoneProvider } from '../providers/bone/bone';
import { BoneDetalhesPageModule } from '../pages/bone-detalhes/bone-detalhes.module';
import { CamisaProvider } from '../providers/camisa/camisa';
import { CamisaPage } from '../pages/camisa/camisa';
import { CamisaDetalhesPageModule } from '../pages/camisa-detalhes/camisa-detalhes.module';
import { CategoriasPageModule } from '../pages/categorias/categorias.module';
import { SobrePage } from '../pages/sobre/sobre';
import { PromocaoProvider } from '../providers/promocao/promocao';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    ContatoPage,
    BonePage,
    CamisaPage,
    CarteirasPage,
    ProdutosDetalhesPage,
    SobrePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CarteirasDetalhesPageModule,
    BoneDetalhesPageModule,
    CamisaDetalhesPageModule,
    CategoriasPageModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    ContatoPage,
    BonePage,
    CarteirasPage,
    CamisaPage,
    ProdutosDetalhesPage,
    SobrePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarteirasProvider,
    BoneProvider,
    CamisaProvider,
    PromocaoProvider,
  ]
})
export class AppModule {}
