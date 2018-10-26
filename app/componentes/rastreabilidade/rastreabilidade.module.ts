import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RastreabilidadeRountingModule } from './rastreabilidade-routing.module';

import { RastreabilidadeComponent } from './rastreabilidade.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RastreabilidadeRountingModule
    ],
    declarations: [
        RastreabilidadeComponent
    ],
    exports: [
        RastreabilidadeComponent
    ]
})

export class RastreabilidadeModule {

    constructor() {
        console.log('achou o construtor')
    }
}