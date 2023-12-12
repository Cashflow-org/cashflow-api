import { PrismaService } from './prisma/prisma.service';
import { Product, Sales } from '@prisma/client';
export declare class AppService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    addSale(date: string, productId: string): Promise<Sales>;
    getAllSales(): Promise<Sales[]>;
    addProduct(name: string, price: string, imgUrl: string): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductById(): Promise<Product[]>;
    deleteAllProducts(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
