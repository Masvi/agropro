import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ColheitaComponent } from './colheita.component';
import { ColheitaRoutingModule } from './colheita-routing.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ColheitaRoutingModule
    ],
    declarations: [
        ColheitaComponent
    ],
    exports: [
        ColheitaComponent
    ]
})

export class ColheitaModule {

    constructor() {
      
    }
}