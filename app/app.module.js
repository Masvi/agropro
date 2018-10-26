"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const platform_browser_1 = require("@angular/platform-browser");
const dialog_service_1 = require("./dialog.service");
const app_component_1 = require("./app.component");
const app_rounting_module_1 = require("./app-rounting.module");
const navbar_component_1 = require("./main/navbar/navbar.component");
const sidebar_component_1 = require("./main/sidebar/sidebar.component");
const utilidade_module_1 = require("./componentes/utilidade/utilidade.module");
const manutencao_module_1 = require("./componentes/manutencao/manutencao.module");
const implantacao_module_1 = require("./componentes/implantacao/implantacao.module");
const propriedade_module_1 = require("./componentes/propriedade/propriedade.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            utilidade_module_1.UtilidadeModule,
            app_rounting_module_1.AppRountingModule,
            propriedade_module_1.PropriedadeModule,
            implantacao_module_1.ImplantacaoModule,
            manutencao_module_1.ManutencaoModule
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            sidebar_component_1.SidebarComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [dialog_service_1.DialogService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map