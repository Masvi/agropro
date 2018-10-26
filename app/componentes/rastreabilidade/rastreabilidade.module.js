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
const rastreabilidade_routing_module_1 = require("./rastreabilidade-routing.module");
const rastreabilidade_component_1 = require("./rastreabilidade.component");
let RastreabilidadeModule = class RastreabilidadeModule {
    constructor() {
        console.log('achou o construtor');
    }
};
RastreabilidadeModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            rastreabilidade_routing_module_1.RastreabilidadeRountingModule
        ],
        declarations: [
            rastreabilidade_component_1.RastreabilidadeComponent
        ],
        exports: [
            rastreabilidade_component_1.RastreabilidadeComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], RastreabilidadeModule);
exports.RastreabilidadeModule = RastreabilidadeModule;
//# sourceMappingURL=rastreabilidade.module.js.map