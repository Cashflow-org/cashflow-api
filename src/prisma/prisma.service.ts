import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Sales } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PrismaService {
  async addSale(date: Date, productId: number) {
    const model: Prisma.SalesCreateArgs = {
      data: {
        date: date,
        productId: productId,
      },
    };
    return await prisma.sales.create(model);
  }
  async getAllSales(): Promise<Sales[]> {
    const allSales = await prisma.sales.findMany({
      include: {
        product: true,
      },
    });
    return allSales;
  }

  async getSaleById(id: number): Promise<Sales> {
    const sale = await prisma.sales.findFirst({
      include: {
        product: true,
      },
      where: {
        id: id,
      },
    });
    return sale;
  }

  async addProduct(name: string, price: number, imgUrl: string) {
    const model: Prisma.ProductCreateArgs = {
      data: {
        name: name,
        price: price,
        imgUrl: imgUrl,
      },
    };
    return await prisma.product.create(model);
  }

  async getAllProducts() {
    const allProducts = await prisma.product.findMany();
    return allProducts;
  }

  async getProductById(id: number) {
    const allProducts = await prisma.product.findFirst({
      where: { id: id },
    });
    return allProducts;
  }

  async deleteAllProducts() {
    const allProducts = await prisma.product.deleteMany();
    return allProducts;
  }
}
