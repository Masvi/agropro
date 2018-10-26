declare var { $ }: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Implantacao } from '../../classes/implantacao';
import { SafraService } from '../../services/safra-service';

// frutiferas
const impFrutAdubcao = [1.500, 22.000];
const impFrutSemeadura = ['100.000', '630.097'];
const impFrutMaquinario = ['1.500', '15.075'];
// hortalica
const impHortAdubcao = ['6890', '57800'];
const impHortSemeadura = [1, 10];
const impHortMaquinario = ['1530', '6108'];
// soja
const impSojaAdubcao = ['5520', '102200'];
const impSojaSemeadura = [1, 10];
const impSojaMaquinario = ['2450', '12060'];
// trigo
const impTrigoAdubcao = ['12660', '150300'];
const impTrigoSemeadura = [1, 10];
const impTrigoMaquinario = ['2450', '12060'];

@Component({
    moduleId: module.id,
    selector: 'implantacao',
    templateUrl: 'implantacao.component.html',
    styleUrls: ['implantacao.component.css'],
    providers: [SafraService]
})


export class ImplantacaoComponent implements OnInit {

    teste: any;
    valor: any;
    total: number;
    adubacao: any;
    semeadura: any;
    maquinario: any;
    cultura: string;

    implantacao: Implantacao;

    adubMin: any;
    adubMax: any;
    semMin: any;
    semMax: any;
    maqMin: any;
    maqMax: any;

    a: any = 0;
    b: any = 0;
    c: any = 0;
    y: any;

    culture = [
        {
            id: 1,
            description: 'Frutiferas',
        },
        {
            id: 2,
            description: 'Hortaliças',
        },
        {
            id: 3,
            description: 'Soja',
        },
        {
            id: 4,
            description: 'Trigo',
        }
    ];


    constructor(private router: Router, private safraService: SafraService) {
        this.teste = 0;
        this.implantacao = new Implantacao();
        console.log(this.culture)
    }

    ngOnInit() { }

    cultureOption() {
        if (this.teste == 1) { // frutiferas
            this.cultura = "Frutiferas";
            this.adubMin = impFrutAdubcao[0];
            this.adubMax = impFrutAdubcao[1];
            this.semMin = impFrutSemeadura[0];
            this.semMax = impFrutSemeadura[1];
            this.maqMin = impFrutMaquinario[0];
            this.maqMax = impFrutMaquinario[1];
            this.adubacao = this.adubMin;
            this.semeadura = this.semMin;
            this.maquinario = this.maqMin;
        }
        if (this.teste == 2) { // horatalicas
            this.cultura = "Hortaliças";
            this.adubMin = impHortAdubcao[0];
            this.adubMax = impHortAdubcao[1];
            this.semMin = impHortSemeadura[0];
            this.semMax = impHortSemeadura[1];
            this.maqMin = impHortMaquinario[0];
            this.maqMax = impHortMaquinario[1];
            this.adubacao = this.adubMin;
            this.semeadura = this.semMin;
            this.maquinario = this.maqMin;
        }
        if (this.teste == 3) { // soja
            this.cultura = "Soja";
            this.adubMin = impSojaAdubcao[0];
            this.adubMax = impSojaAdubcao[1];
            this.semMin = impSojaSemeadura[0];
            this.semMax = impSojaSemeadura[1];
            this.maqMin = impSojaMaquinario[0];
            this.maqMax = impSojaMaquinario[1];
            this.adubacao = this.adubMin;
            this.semeadura = this.semMin;
            this.maquinario = this.maqMin;
        }
        if (this.teste == 4) { // trigo
            this.cultura = "Trigo";
            this.adubMin = impTrigoAdubcao[0];
            this.adubMax = impTrigoAdubcao[1];
            this.semMin = impTrigoSemeadura[0];
            this.semMax = impTrigoSemeadura[1];
            this.maqMin = impTrigoMaquinario[0];
            this.maqMax = impTrigoMaquinario[1];
            this.adubacao = this.adubMin;
            this.semeadura = this.semMin;
            this.maquinario = this.maqMin;
        }
    }

    handleAdub() {
        this.a = this.adubacao;
        this.handleImplatacao();
    }

    handleSem() {
        this.b = this.semeadura;
        this.handleImplatacao();
    }

    handleMaqu() {
        this.c = this.maquinario;
        this.handleImplatacao()
    }

    handleImplatacao() {
        this.total = this.a + this.b + this.c;
        this.y = this.total.toLocaleString();
    }

    handleCancel() {
        this.total = 0;
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.adubacao = 0;
        this.semeadura = 0;
        this.maquinario = 0;
    }

    saveImplantacao() {
        this.implantacao.cultura = this.cultura;
        this.implantacao.adubacao = this.adubacao;
        this.implantacao.semeadura = this.semeadura;
        this.implantacao.maquinario = this.maquinario;
        this.safraService.saveImplementacao(this.implantacao);
    }
}
