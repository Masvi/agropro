import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ImplantacaoComponent } from './implantacao.component';
import { ManutencaoModule } from '../manutencao/manutencao.module';
import { ImplantacaoRoutingModule } from './implantacao-routing.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ManutencaoModule,
        ImplantacaoRoutingModule
    ],
    declarations: [
        ImplantacaoComponent
    ],
    exports: [
        ImplantacaoComponent
    ]
})

export class ImplantacaoModule {

    constructor() {
        console.log('achou o construtor')
    }
}