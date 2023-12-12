import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient, Sales } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class SalesService {
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
}
