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
const implantacao_1 = require("../../classes/implantacao");
const safra_service_1 = require("../../services/safra-service");
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
let ImplantacaoComponent = class ImplantacaoComponent {
    constructor(router, safraService) {
        this.router = router;
        this.safraService = safraService;
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.culture = [
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
        this.teste = 0;
        this.implantacao = new implantacao_1.Implantacao();
        console.log(this.culture);
    }
    ngOnInit() { }
    cultureOption() {
        if (this.teste == 1) {
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
        if (this.teste == 2) {
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
        if (this.teste == 3) {
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
        if (this.teste == 4) {
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
        this.handleImplatacao();
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
};
ImplantacaoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'implantacao',
        templateUrl: 'implantacao.component.html',
        styleUrls: ['implantacao.component.css'],
        providers: [safra_service_1.SafraService]
    }),
    __metadata("design:paramtypes", [router_1.Router, safra_service_1.SafraService])
], ImplantacaoComponent);
exports.ImplantacaoComponent = ImplantacaoComponent;
//# sourceMappingURL=implantacao.component.js.map