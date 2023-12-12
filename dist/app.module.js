"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma/prisma.service");
const products_controller_1 = require("./controllers/products/products.controller");
const sales_controller_1 = require("./controllers/sales/sales.controller");
const product_service_1 = require("./services/product/product.service");
const sales_service_1 = require("./services/sales/sales.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [products_controller_1.ProductsController, sales_controller_1.SalesController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, product_service_1.ProductService, sales_service_1.SalesService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map