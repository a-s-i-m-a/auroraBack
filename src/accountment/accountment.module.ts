import { Module } from '@nestjs/common';
import { AccountmentController } from './accountment.controller';
import { AccountmentService } from './accountment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './account.models';

@Module({
  controllers: [AccountmentController],
  providers: [AccountmentService],
  imports: [
    MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }]),
  ],
})
export class AccountmentModule {}
