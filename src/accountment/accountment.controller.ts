import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountmentService } from './accountment.service';
import { Account } from './account.models';

@Controller('account')
export class AccountmentController {
  constructor(private readonly accountmentService: AccountmentService) {}
  @Post()
  async createProduct(@Body() dto: Account) {
    return this.accountmentService.sellProduct(dto);
  }

  @Get()
  async getReport() {
    return this.accountmentService.report();
  }
}
