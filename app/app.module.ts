import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { DialogService } from './dialog.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRountingModule } from './app-rounting.module';

import { NavbarComponent } from './main/navbar/navbar.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';

import { UtilidadeModule } from './componentes/utilidade/utilidade.module';
import { ManutencaoModule } from './componentes/manutencao/manutencao.module';
import { ImplantacaoModule } from './componentes/implantacao/implantacao.module';
import { PropriedadeModule } from './componentes/propriedade/propriedade.module';
import { RastreabilidadeModule } from './componentes/rastreabilidade/rastreabilidade.module'


@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        UtilidadeModule,
        ManutencaoModule,
        AppRountingModule,
        PropriedadeModule,
        ImplantacaoModule,
        RastreabilidadeModule
        // InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent
    ],
    bootstrap: [AppComponent],
    providers: [DialogService]
})

export class AppModule {

}