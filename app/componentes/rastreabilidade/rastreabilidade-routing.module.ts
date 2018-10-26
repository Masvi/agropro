import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RastreabilidadeComponent } from './rastreabilidade.component';

const contatoRoutes: Routes = [
    {
        path: 'rastreabilidade',
        component: RastreabilidadeComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes)
    ],
    exports: [RouterModule]
})
export class RastreabilidadeRountingModule { }