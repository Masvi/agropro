import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImplantacaoComponent } from './implantacao.component';

const routes: Routes = [
    {
        path: 'implantacao',
        component: ImplantacaoComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ImplantacaoRoutingModule { }