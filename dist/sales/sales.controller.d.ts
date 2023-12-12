import { Sales } from '@prisma/client';
import { AppService } from 'src/app.service';
export declare class SalesController {
    private readonly appService;
    constructor(appService: AppService);
    getAllSales(): any;
    addSale(date: any, productId: any): Promise<Sales>;
}
