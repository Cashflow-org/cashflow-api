import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    addProduct(name: string, price: string, imgUrl: string): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductById(id: any): Promise<Product>;
    deleteAllProducts(): Promise<any>;
}
