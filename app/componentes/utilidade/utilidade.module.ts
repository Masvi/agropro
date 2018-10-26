import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {UtilidadeComponent} from './utilidade.component';

@NgModule({
    imports:[
        FormsModule,
        CommonModule, 
    ],
    declarations:[
        UtilidadeComponent
    ],
    exports:[
        UtilidadeComponent
    ]
})

export class UtilidadeModule{

    constructor(){
        console.log('achou o construtor')
    }
}