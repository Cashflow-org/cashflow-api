import { AppService } from './app.service';
import { Product, Sales } from '@prisma/client';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllSales(): any;
    addSale(date: any, productId: any): Promise<Sales>;
    getAllProducts(): any;
    getProductById(): any;
    addProduct(name: any, price: any, imgUrl: any): Promise<Product>;
    deleteAllProducts(): any;
}
