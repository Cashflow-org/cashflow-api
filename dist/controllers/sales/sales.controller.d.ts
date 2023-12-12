import { Sales } from '@prisma/client';
import { SalesService } from 'src/services/sales/sales.service';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    getAllSales(): Promise<Sales[]>;
    getSaleById(id: string): Promise<Sales>;
    addSale(date: any, productId: any): Promise<Sales>;
}
