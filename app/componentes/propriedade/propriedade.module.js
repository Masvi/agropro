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
const propriedade_routing_module_1 = require("./propriedade-routing.module");
const propriedade_component_1 = require("./propriedade.component");
const utilidade_module_1 = require("../utilidade/utilidade.module");
let PropriedadeModule = class PropriedadeModule {
    constructor() {
        console.log('achou o construtor');
    }
};
PropriedadeModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            utilidade_module_1.UtilidadeModule,
            propriedade_routing_module_1.PropriedadeRountingModule
        ],
        declarations: [
            propriedade_component_1.PropriedadeComponent
        ],
        exports: [
            propriedade_component_1.PropriedadeComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], PropriedadeModule);
exports.PropriedadeModule = PropriedadeModule;
//# sourceMappingURL=propriedade.module.js.map