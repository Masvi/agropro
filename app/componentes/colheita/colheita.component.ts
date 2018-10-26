declare var { $ }: any;
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

const maquinarioSoja = [1, 10];
const maquinarioTrigo = [1, 10];
const maquinarioHortal = [1, 10];
const maquinarioFrutif = [1, 10];
const transporteSoja = [1, 10];
const transporteTrigo = [1, 10];
const transporteHortal = [1, 10];
const transporteFrutif = [1, 10];


@Component({
    moduleId: module.id,
    selector: 'colheita',
    templateUrl: 'colheita.component.html',
    styleUrls: ['colheita.component.css']
})

export class ColheitaComponent implements OnInit {

    cultura: string;
    transporte: number;
    maquinario: number;
    maqMin: number;
    maqMax: number;
    transMin: number;
    transMax: number;

    trans: number = 0;
    maqui: number = 0;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            if (params['id'] === '1') {
                console.log('frutifera');
                this.cultura = "Frutifera";
            }
            if (params['id'] === '2') {
                console.log('hostalicas');
                this.cultura = "Hortaliças";

            }
            if (params['id'] === '3') {
                console.log('soja');
                this.cultura = "Soja";
            }
            if (params['id'] === '4') {
                console.log('trigo');
                this.cultura = "Trigo";

            }
        });
    }
    ngOnInit() { }
    
    handleMaquinario(){
        this.maqui = this.maquinario;
    }

    handleTransporte(){
        this.trans =this.transporte;
    }

}
