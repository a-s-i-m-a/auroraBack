import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop()
  product_id: string;
  @Prop()
  boughtPrice: string;
  @Prop()
  soldPrice: string;
  @Prop()
  discount: string;
  @Prop()
  count: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
