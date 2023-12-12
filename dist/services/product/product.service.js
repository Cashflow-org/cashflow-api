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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prismaService) {
        this.prismaService = prismaService;
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
    getProductById(id) {
        if (!id)
            throw new common_1.BadRequestException('Id is required!');
        const idNumber = parseInt(id);
        if (Number.isNaN(idNumber))
            throw new common_1.BadRequestException('Id need to be a valid number!');
        return this.prismaService.getProductById(idNumber);
    }
    deleteAllProducts() {
        return this.prismaService.deleteAllProducts();
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map