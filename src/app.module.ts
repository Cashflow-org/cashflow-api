import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductsController } from './controllers/products/products.controller';
import { SalesController } from './controllers/sales/sales.controller';
import { ProductService } from './services/product/product.service';
import { SalesService } from './services/sales/sales.service';
import { ProductsService } from './prisma/products/products/products.service';
import { ProductsService } from './prisma/products/products.service';
import { SalesService } from './prisma/sales/sales.service';

@Module({
  imports: [],
  controllers: [ProductsController, SalesController],
  providers: [AppService, PrismaService, ProductService, SalesService, ProductsService],
})
export class AppModule {}
