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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SalesService = class SalesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    addSale(date, productId) {
        if (!date)
            throw new common_1.BadRequestException('Date is required!');
        const dateTime = new Date(date);
        if (!productId)
            throw new common_1.BadRequestException('ProductId is required!');
        const productIdNumber = parseInt(productId);
        if (Number.isNaN(productIdNumber))
            throw new common_1.BadRequestException('Price need to be a valid number!');
        return this.prismaService.addSale(dateTime, productIdNumber);
    }
    getAllSales() {
        return this.prismaService.getAllSales();
    }
    getSaleById(id) {
        if (!id)
            throw new common_1.BadRequestException('Id is required!');
        const idNumber = parseInt(id);
        if (Number.isNaN(idNumber))
            throw new common_1.BadRequestException('Id need to be a valid number!');
        return this.prismaService.getSaleById(idNumber);
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalesService);
//# sourceMappingURL=sales.service.js.map