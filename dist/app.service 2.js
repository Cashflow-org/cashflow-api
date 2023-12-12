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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
let AppService = class AppService {
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
    addProduct(name, price, imgUrl) {
        if (!name)
            throw new common_1.BadRequestException('Name is required!');
        if (!price)
            throw new common_1.BadRequestException('Price is required!');
        const priceNumber = parseFloat(price);
        if (Number.isNaN(priceNumber))
            throw new common_1.BadRequestException('Price need to be a valid number!');
        if (!imgUrl)
            throw new common_1.BadRequestException('ImgUrl is required!');
        return this.prismaService.addProduct(name, priceNumber, imgUrl);
    }
    getAllProducts() {
        return this.prismaService.getAllProducts();
    }
    getProductById() {
        return this.prismaService.getAllProducts();
    }
    deleteAllProducts() {
        return this.prismaService.deleteAllProducts();
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
//# sourceMappingURL=app.service.js.map