import { Product } from '@prisma/client';
import { AppService } from 'src/app.service';
export declare class ProductsController {
    private readonly appService;
    constructor(appService: AppService);
    getAllProducts(): any;
    getProductById(): any;
    addProduct(name: any, price: any, imgUrl: any): Promise<Product>;
    deleteAllProducts(): any;
}
