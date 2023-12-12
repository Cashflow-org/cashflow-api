import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  async addProduct(name: string, price: number, imgUrl: string): Promise<Product> {
    const model: Prisma.ProductCreateArgs = {
      data: {
        name: name,
        price: price,
        imgUrl: imgUrl,
      },
    };
    return await prisma.product.create(model);
  }

  async getAllProducts(): Promise<Product[]> {
    const allProducts = await prisma.product.findMany();
    return allProducts;
  }

  async getProductById(id: number): Promise<Product> {
    const allProducts = await prisma.product.findFirst({
      where: { id: id },
    });
    return allProducts;
  }

  async deleteAllProducts(): Promise<Prisma.BatchPayload> {
    const allProducts = await prisma.product.deleteMany();
    return allProducts;
  }
}
