"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let PrismaService = class PrismaService {
    async addSale(date, productId) {
        const model = {
            data: {
                date: date,
                productId: productId,
            },
        };
        return await prisma.sales.create(model);
    }
    async getAllSales() {
        const allSales = await prisma.sales.findMany({
            include: {
                product: true,
            },
        });
        return allSales;
    }
    async getSaleById(id) {
        const sale = await prisma.sales.findFirst({
            include: {
                product: true,
            },
            where: {
                id: id,
            },
        });
        return sale;
    }
    async addProduct(name, price, imgUrl) {
        const model = {
            data: {
                name: name,
                price: price,
                imgUrl: imgUrl,
            },
        };
        return await prisma.product.create(model);
    }
    async getAllProducts() {
        const allProducts = await prisma.product.findMany();
        return allProducts;
    }
    async getProductById(id) {
        const allProducts = await prisma.product.findFirst({
            where: { id: id },
        });
        return allProducts;
    }
    async deleteAllProducts() {
        const allProducts = await prisma.product.deleteMany();
        return allProducts;
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);
//# sourceMappingURL=prisma.service.js.map