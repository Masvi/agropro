"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
// defensivos
const herbicidaSoja = [1, 10];
const inseticidaSoja = [1, 10];
const fugincidaSoja = [1, 10];
const herbicidaTrigo = [1, 10];
const inseticidaTrigo = [1, 10];
const fugincidaTrigo = [1, 10];
const herbicidaHortal = [1, 10];
const inseticidaHortal = [1, 10];
const fugincidaHortal = [1, 10];
const herbicidaFrutif = [1, 10];
const inseticidaFrutif = [1, 10];
const fugincidaFrutif = [1, 10];
// maquinario
const maquinarioSoja = [1, 10];
const maquinarioTrigo = [1, 10];
const maquinarioHortal = [1, 10];
const maquinarioFrutif = [1, 10];
let ManutencaoComponent = class ManutencaoComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.inset = 0;
        this.fungi = 0;
        this.herbi = 0;
        this.maqui = 0;
        this.route.params.subscribe(params => {
            if (params['id'] === '1') {
                console.log('frutifera');
                this.cultura = "Frutifera";
                this.culturaId = 1;
                this.fungMin = fugincidaFrutif[0];
                this.fungMax = fugincidaFrutif[1];
                this.inseMin = inseticidaFrutif[0];
                this.inseMax = inseticidaFrutif[1];
                this.herMin = herbicidaFrutif[0];
                this.herMax = herbicidaFrutif[1];
                this.maqMin = maquinarioFrutif[0];
                this.maqMax = maquinarioFrutif[1];
            }
            if (params['id'] === '2') {
                console.log('hostalicas');
                this.cultura = "Hortaliças";
                this.culturaId = 2;
                this.fungMin = fugincidaHortal[0];
                this.fungMax = fugincidaHortal[1];
                this.inseMin = inseticidaHortal[0];
                this.inseMax = inseticidaHortal[1];
                this.herMin = herbicidaHortal[0];
                this.herMax = herbicidaHortal[1];
                this.maqMin = maquinarioHortal[0];
                this.maqMax = maquinarioHortal[1];
            }
            if (params['id'] === '3') {
                console.log('soja');
                this.cultura = "Soja";
                this.culturaId = 3;
                this.fungMin = fugincidaTrigo[0];
                this.fungMax = fugincidaTrigo[1];
                this.inseMin = inseticidaTrigo[0];
                this.inseMax = inseticidaTrigo[1];
                this.herMin = herbicidaTrigo[0];
                this.herMax = herbicidaTrigo[1];
                this.maqMin = maquinarioTrigo[0];
                this.maqMax = maquinarioTrigo[1];
            }
            if (params['id'] === '4') {
                console.log('trigo');
                this.cultura = "Trigo";
                this.culturaId = 4;
                this.fungMin = fugincidaSoja[0];
                this.fungMax = fugincidaSoja[1];
                this.inseMin = inseticidaSoja[0];
                this.inseMax = inseticidaSoja[1];
                this.herMin = herbicidaSoja[0];
                this.herMax = herbicidaSoja[1];
                this.maqMin = maquinarioSoja[0];
                this.maqMax = maquinarioSoja[1];
            }
        });
    }
    ngOnInit() { }
    handleFungicida() {
        this.fungi = this.fungicida;
    }
    handleInseticida() {
        this.inset = this.inseticida;
    }
    handleherbicida() {
        this.herbi = this.herbicida;
    }
    handleMaquinario() {
        this.maqui = this.maquinario;
    }
};
ManutencaoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'manutencao',
        templateUrl: 'manutencao.component.html',
        styleUrls: ['manutencao.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], ManutencaoComponent);
exports.ManutencaoComponent = ManutencaoComponent;
//# sourceMappingURL=manutencao.component.js.map