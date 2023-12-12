import { BadRequestException, Injectable } from '@nestjs/common';
import { Sales } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private readonly prismaService: PrismaService) {}

  addSale(date: string, productId: string): Promise<Sales> {
    if (!date) throw new BadRequestException('Date is required!');
    const dateTime = new Date(date);
    if (!productId) throw new BadRequestException('ProductId is required!');
    const productIdNumber = parseInt(productId);
    if (Number.isNaN(productIdNumber))
      throw new BadRequestException('Price need to be a valid number!');

    return this.prismaService.addSale(dateTime, productIdNumber);
  }
  getAllSales(): Promise<Sales[]> {
    return this.prismaService.getAllSales();
  }

  getSaleById(id: string): Promise<Sales> {
    if (!id) throw new BadRequestException('Id is required!');
    const idNumber = parseInt(id);
    if (Number.isNaN(idNumber))
      throw new BadRequestException('Id need to be a valid number!');
    return this.prismaService.getSaleById(idNumber);
  }
}
