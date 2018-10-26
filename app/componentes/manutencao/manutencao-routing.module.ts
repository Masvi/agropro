import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManutencaoComponent } from './manutencao.component';

const routes: Routes = [
    {
        path: 'manutencao/:id',
        component: ManutencaoComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ManutencaoRoutingModule { }