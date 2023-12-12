import { AppService } from './app.service';
import { Sales } from '@prisma/client';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllSales(): any;
    addSale(date: any, productId: any): Promise<Sales>;
}
