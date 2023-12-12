import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Prisma, Product } from '@prisma/client';
import { ProductService } from 'src/services/product/product.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }
  @Get('/:id')
  getProductById(@Param('id') id): Promise<Product> {
    return this.productService.getProductById(id);
  }
  @Post()
  addProduct(
    @Query('name') name,
    @Query('price') price,
    @Query('imgUrl') imgUrl,
  ): Promise<Product> {
    return this.productService.addProduct(name, price, imgUrl);
  }

  @Post('/deleteAll')
  deleteAllProducts(): Promise<Prisma.BatchPayload> {
    return this.productService.deleteAllProducts();
  }
}
