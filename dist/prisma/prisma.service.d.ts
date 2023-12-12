import { Sales } from '@prisma/client';
export declare class PrismaService {
    addSale(date: Date, productId: number): Promise<any>;
    getAllSales(): Promise<Sales[]>;
    getSaleById(id: number): Promise<Sales>;
    addProduct(name: string, price: number, imgUrl: string): Promise<any>;
    getAllProducts(): Promise<any>;
    getProductById(id: number): Promise<any>;
    deleteAllProducts(): Promise<any>;
}
