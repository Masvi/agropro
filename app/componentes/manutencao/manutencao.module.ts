import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColheitaModule } from '../colheita/colheita.module'
import { ManutencaoComponent } from './manutencao.component';
import { ManutencaoRoutingModule } from './manutencao-routing.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ColheitaModule,
        ManutencaoRoutingModule
    ],
    declarations: [
        ManutencaoComponent
    ],
    exports: [
        ManutencaoComponent
    ]
})

export class ManutencaoModule {
    constructor() {
        console.log('achou o construtor')
    }
}