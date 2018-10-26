import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColheitaComponent } from './colheita.component';

const routes: Routes = [
    {
        path: 'colheita/:id',
        component: ColheitaComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ColheitaRoutingModule { }  