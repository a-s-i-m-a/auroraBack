import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Product')
    private readonly ProductModel: Model<ProductDocument>,
  ) {}

  //  creating a Product
  async createProduct(Product: Product): Promise<Product> {
    const newProduct = new this.ProductModel(Product);
    return newProduct.save();
  }

  //  reading the Product collection
  async readProduct() {
    return this.ProductModel.find({})
      .then((Product) => {
        return Product;
      })
      .catch((err) => console.log(err));
  }

  // upadting the data
  async updateProduct(id, data): Promise<Product> {
    return this.ProductModel.findByIdAndUpdate(id, data);
  }

  // deleting the data
  async deleteProduct(id) {
    return this.ProductModel.findByIdAndRemove(id);
  }

  // find the data
  async findProduct(id) {
    return this.ProductModel.findById(id);
  }
}
