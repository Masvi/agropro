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
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const colheita_module_1 = require("../colheita/colheita.module");
const manutencao_component_1 = require("./manutencao.component");
const manutencao_routing_module_1 = require("./manutencao-routing.module");
let ManutencaoModule = class ManutencaoModule {
    constructor() {
        console.log('achou o construtor');
    }
};
ManutencaoModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            colheita_module_1.ColheitaModule,
            manutencao_routing_module_1.ManutencaoRoutingModule
        ],
        declarations: [
            manutencao_component_1.ManutencaoComponent
        ],
        exports: [
            manutencao_component_1.ManutencaoComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], ManutencaoModule);
exports.ManutencaoModule = ManutencaoModule;
//# sourceMappingURL=manutencao.module.js.map