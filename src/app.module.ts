import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductsController } from './controllers/products/products.controller';
import { SalesController } from './controllers/sales/sales.controller';
import { ProductService } from './services/product/product.service';
import { SalesService } from './services/sales/sales.service';

@Module({
  imports: [],
  controllers: [ProductsController, SalesController],
  providers: [AppService, PrismaService, ProductService, SalesService],
})
export class AppModule {}
