import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductSchema } from './product.models';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://asim:asim@ac-qfzch0d-shard-00-00.teglshr.mongodb.net:27017,ac-qfzch0d-shard-00-01.teglshr.mongodb.net:27017,ac-qfzch0d-shard-00-02.teglshr.mongodb.net:27017/crm?ssl=true&replicaSet=atlas-5deeh3-shard-0&authSource=admin&retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
