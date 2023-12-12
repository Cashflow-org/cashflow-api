import { Prisma, Product } from '@prisma/client';
import { ProductService } from 'src/services/product/product.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): Promise<Product[]>;
    getProductById(id: any): Promise<Product>;
    addProduct(name: any, price: any, imgUrl: any): Promise<Product>;
    deleteAllProducts(): Promise<Prisma.BatchPayload>;
}
