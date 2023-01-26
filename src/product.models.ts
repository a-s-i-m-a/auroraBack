import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  title: string;
  @Prop()
  boughtPrice: string;
  @Prop()
  soldPrice: string;
  // @Prop()
  // discount: string;
  @Prop()
  color: string;
  @Prop()
  sizes: string[];
  // @Prop()
  // code: string;
  @Prop({ default: true })
  isInStock: boolean;
  @Prop()
  description: string;

  @Prop({ default: Date.now })
  date_added: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
