import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PropriedadeComponent} from './propriedade.component';

const contatoRoutes: Routes = [
    {
        path:'propriedade',
        component: PropriedadeComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(contatoRoutes)
    ],
    exports:[RouterModule]
})
export class PropriedadeRountingModule {}