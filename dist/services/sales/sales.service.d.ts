import { Sales } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SalesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    addSale(date: string, productId: string): Promise<Sales>;
    getAllSales(): Promise<Sales[]>;
    getSaleById(id: string): Promise<Sales>;
}
