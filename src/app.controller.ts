import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './product.models';
import { ProductUpdateDto } from './productUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createProduct(@Body() dto: Product) {
    return this.appService.createProduct(dto);
  }

  @Get()
  readProduct() {
    return this.appService.readProduct();
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateData: ProductUpdateDto,
  ): Promise<Product> {
    return this.appService.updateProduct(id, updateData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.appService.deleteProduct(id);
  }

  @Get(':id')
  async findProduct(@Param('id') id: string) {
    return this.appService.findProduct(id);
  }
}
