import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Sales } from '@prisma/client';
import { SalesService } from 'src/services/sales/sales.service';

@ApiTags('Sales')
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  getAllSales(): Promise<Sales[]> {
    return this.salesService.getAllSales();
  }

  @Get('/:id')
  getSaleById(@Param('id') id: string): Promise<Sales> {
    return this.salesService.getSaleById(id);
  }

  @Post()
  addSale(@Query('date') date, @Query('productId') productId): Promise<Sales> {
    return this.salesService.addSale(date, productId);
  }
}
