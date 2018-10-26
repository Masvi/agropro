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
const maquinarioSoja = [1, 10];
const maquinarioTrigo = [1, 10];
const maquinarioHortal = [1, 10];
const maquinarioFrutif = [1, 10];
const transporteSoja = [1, 10];
const transporteTrigo = [1, 10];
const transporteHortal = [1, 10];
const transporteFrutif = [1, 10];
let ColheitaComponent = class ColheitaComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.trans = 0;
        this.maqui = 0;
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
    handleMaquinario() {
        this.maqui = this.maquinario;
    }
    handleTransporte() {
        this.trans = this.transporte;
    }
};
ColheitaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'colheita',
        templateUrl: 'colheita.component.html',
        styleUrls: ['colheita.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], ColheitaComponent);
exports.ColheitaComponent = ColheitaComponent;
//# sourceMappingURL=colheita.component.js.map