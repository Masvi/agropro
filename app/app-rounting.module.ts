import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRouts: Routes = [
    {
        path: '',
        redirectTo: '/propriedade',
        pathMatch: 'full'
    },
    {
        path: 'implantacao',
        redirectTo: 'componentes/implatancao'
    },
    {
        path: 'rastreabilidade',
        redirectTo: 'componentes/rastreabilidade'
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRouts)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRountingModule {

}