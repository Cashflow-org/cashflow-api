import { BadRequestException, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  addProduct(name: string, price: string, imgUrl: string): Promise<Product> {
    if (!name) throw new BadRequestException('Name is required!');
    if (!price) throw new BadRequestException('Price is required!');
    const priceNumber = parseFloat(price);
    if (Number.isNaN(priceNumber))
      throw new BadRequestException('Price need to be a valid number!');
    if (!imgUrl) throw new BadRequestException('ImgUrl is required!');

    return this.prismaService.addProduct(name, priceNumber, imgUrl);
  }

  getAllProducts(): Promise<Product[]> {
    return this.prismaService.getAllProducts();
  }

  getProductById(id): Promise<Product> {
    if (!id) throw new BadRequestException('Id is required!');
    const idNumber = parseInt(id);
    if (Number.isNaN(idNumber))
      throw new BadRequestException('Id need to be a valid number!');
    return this.prismaService.getProductById(idNumber);
  }

  deleteAllProducts() {
    return this.prismaService.deleteAllProducts();
  }
}
