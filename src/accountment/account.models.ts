import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop()
  product_id: string;
  @Prop()
  product_title: string;
  @Prop()
  boughtPrice: string;
  @Prop()
  soldPrice: string;
  @Prop()
  discount: string;
  @Prop()
  count: string;
  @Prop({
    default: `${new Date().getDate()}:${new Date().getMonth()}:${new Date().getFullYear()}`,
  })
  date: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
