import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PropriedadeRountingModule} from './propriedade-routing.module';

import {PropriedadeComponent} from './propriedade.component';

import {UtilidadeModule} from '../utilidade/utilidade.module';

@NgModule({
    imports:[
        FormsModule,
        CommonModule, 
        UtilidadeModule,
        PropriedadeRountingModule
    ],
    declarations:[
        PropriedadeComponent
    ],
    exports:[
        PropriedadeComponent
    ]
})

export class PropriedadeModule{

    constructor(){
        console.log('achou o construtor')
    }
}